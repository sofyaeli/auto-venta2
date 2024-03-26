import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paglistavehiculos',
  templateUrl: './paglistavehiculos.component.html',
  styleUrls: ['./paglistavehiculos.component.css']
})
export class PaglistavehiculosComponent implements OnInit {
   
  public mostrarImagen = true;
  //private filtro: string = '' ;
  public rows:number = 10;
  public page:number = 1 ;
  public filtro: string = "" ;
  public pages: number = 0;


  @Input() valor: string = '' ;
  listavehiculos:Array<any> = [];
  

  constructor(
    private vehiculoService : VehiculoService,
    
  ) {
     
   }

  ngOnInit() {
    console.log("Ingreso a ejecutarse");
    this.consultarVehiculos();
    
  }

  mostrar(){
    this.mostrarImagen = !this.mostrarImagen
  }


   consultarVehiculos(){
    this.vehiculoService.getVehiculos(this.filtro, this.rows, this.page).subscribe( respuesta =>{
       if(respuesta.codigo == '1'){
        this.listavehiculos = respuesta.data;
        this.pages = respuesta.pages;
        this.paginar(respuesta.pages)
       }
    });
    }

   cambiarPagina(pagina:number){
    this.page = pagina;
    this.consultarVehiculos;
   }

   listaPaginas: Array<number> = [];
   paginar(pages:number){
    this.listaPaginas = [];
    for(let i=1; i<=pages; i++){
      this.listaPaginas.push(i);
    }
   }

   siguiente(){
    if(this.page < this.pages){
      this.page++;
      this.consultarVehiculos();
    }
   }

   atras(){
    if(this.page > 1){
      this.page--;
      this.consultarVehiculos();
    }
   }
  
   eliminar(codigo:string){
    Swal.fire({
      title: "Estas seguro que deseas eliminar este registro",
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`,
      icon:"question"
    }).then( (res)=>{
       if (res.isConfirmed){
        this.vehiculoService.eliminarVehiculo(codigo).subscribe( data =>{
         if (data.codigo == '1'){
          this.consultarVehiculos();
          Swal.fire({
            title:"mensaje",
            text: "Vehiculo eliminado con exito",
            icon:"success",
            
          })
         }
        })
       }
    });

   }

  recepcion(dato:number){
    console.log('Dato:',dato);
  }



}
