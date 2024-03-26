import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/Modelos/Vehiculo';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalleDeVehiculos',
  templateUrl: './detalleDeVehiculos.component.html',
  styleUrls: ['./detalleDeVehiculos.component.css']
})
export class DetalleDeVehiculosComponent implements OnInit {

  vehiculo? : Vehiculo;
  fb: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private vehiculoService: VehiculoService,
    private formbuilder: FormBuilder
  ) { 
    this.fb= this.formbuilder.group({
      "codigo":['',[Validators.required]],
      "marca":['',[Validators.required]],
      "modelo":['',[Validators.required]],
      "anio":['',[Validators.required]],
      "kilometraje":['',[Validators.required]],
      "precio":['',[Validators.required]],
      "calificacion":['',[Validators.required]],
    });
    
  }
  
 


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.vehiculoService.getVehiculo(params['codigo']).subscribe( data =>{
        if(data.codigo == '1'){
          this.vehiculo = data.data;
          this.fb.controls['codigo'].setValue(this.vehiculo?.codigo);
          this.fb.controls['marca'].setValue(this.vehiculo?.marca);
          this.fb.controls['modelo'].setValue(this.vehiculo?.modelo);
          this.fb.controls['anio'].setValue(this.vehiculo?.anio);
          this.fb.controls['calificacion'].setValue(this.vehiculo?.calificacion);
          this.fb.controls['precio'].setValue(this.vehiculo?.precio);
          this.fb.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
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

}
