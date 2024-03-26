import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/Modelos/Vehiculo';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})
export class PagVehiculoComponent implements OnInit {
 vehiculo? : Vehiculo;
 
 formulario : FormGroup;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formbuilder: FormBuilder,

  
    private vehiculoService:VehiculoService) 
    {
      this.formulario= this.formbuilder.group({
        "codigo":['',[Validators.required]],
        "marca":['',[Validators.required]],
        "modelo":['',[Validators.required]],
        "anio":['',[Validators.required]],
        "kilometraje":['',[Validators.required]],
        "precio":['',[Validators.required]],
        "calificacion":['',[Validators.required]],
        "foto":['',],
      });
      this.formulario.controls['codigo'].disable();
    }


    
    
  
 
    ngOnInit(): void {
   this.activatedRoute.params.subscribe(params => {
    this.vehiculoService.getVehiculo(params['codigo']).subscribe( data =>{
      if(data.codigo == '1'){
        this.vehiculo = data.data;
        this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
        this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
        this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
        this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
        this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
        this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
        this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
        this.formulario.controls['foto'].setValue(this.vehiculo?.foto);
        
      }else{
         Swal.fire({
            title:"Mensaje de alerta",
            text: "No se pudo cargar la informacion",
            icon: "error"
         })
      }
    });
   });
  }

  guardar(){
    if(this.formulario.valid){
      this.vehiculoService.actualizarvehiculo({...this.formulario.value}, this.formulario.controls['codigo'].value).subscribe(data =>{
         if(data.codigo == '1'){
          Swal.fire({
            title:"Mensaje",
            text: "Vehiculo ingresado con exito",
            icon: "info"
         });
         }
      });
    }else{
      Swal.fire({
        title:"Mensaje de alerta",
        text: "faltan llenar campos",
        icon: "error"
     })
    }
  }
  

}
