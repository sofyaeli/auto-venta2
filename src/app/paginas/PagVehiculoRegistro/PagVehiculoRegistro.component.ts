import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/Modelos/Vehiculo';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

 
  formulario: FormGroup;

  constructor(
    private vehiculoServicio: VehiculoService,
    private formBuider : FormBuilder,
    private router: Router,
    
  ) {

    

    this.formulario = this.formBuider.group({
      "codigo":[
        '',[ 
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          
        ]
      ],
      "marca": [
        '',[ 
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          
        ]
      ],
      "modelo": [
        '',[ 
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          
        ]
      ],
      "anio": [
        '',[ 
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          
        ]
      ],
    
      "kilometraje":[
        '',[ 
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
          
        ]
      ],
      "precio":[
        '',[ 
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
      
        ]
      ],

        
      "calificacion":[
        '',[ 
          Validators.required,
          Validators.minLength(1),
         

        ]
      ],
      
        "foto":[
          '',[

          ]
        ]
      
      
   })
   }
   

  ngOnInit() {
    
    
  }

  guardar(){
    
    if(this.formulario.valid) {
      this.vehiculoServicio.insertvehiculo({...this.formulario.value}).subscribe(
       respuesta => {
         if( respuesta.codigo == '1'){
          Swal.fire({
            title:"Mensaje",
            text: "Vehiculo registrado con exito",
            icon: "success"
         }).then(
           res =>{
            this.formulario.reset();
           }
         );
          
         }else{
          Swal.fire({
            title:"Mensaje",
            text: "No se puede registrar el vehiculo"+respuesta.mensaje,
            icon: "info"
         });
         }
         }
      )
      }else{
        Swal.fire({
          title:"Mensaje de alerta",
          text: "Faltan llenar campos",
          icon: "info"
       });
    };

   }
   

   
  } 
