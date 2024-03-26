import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { VehiculoService } from '../../servicios/vehiculo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registroclientes',
  templateUrl: './registroclientes.component.html',
  styleUrls: ['./registroclientes.component.css']
})
export class RegistroclientesComponent implements OnInit {

  tituloPagina = "Registro del Cliente";​
 
  quiereContacto: boolean = false;​
  formulari: FormGroup

  constructor(
    private router:Router,
    private vehiculoServicio: VehiculoService,
    private formbuilder: FormBuilder
    ) { 
      this.formulari = this.formbuilder.group({
        "nombre":[
          '',[ 
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30)
          ]
        ],
        "apellido":[
          '',[ 
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30)
          ]
        ],
        "input":[
          '',[ 
            
          ]
        ],
        "password":[
          '',[ 
            
          ]
        ],
        "quiereContacto":[
          '',[ 
            
          ]
        ],
        "email":[
          '',[ 
            
          ]
        ],
        "telefono":[
          '',[ 
            
          ]
        ],
      })
    }

  ngOnInit() {

    this.vehiculoServicio.getclientes().subscribe((data) =>{
     
      console.log(data)
    })
  }

  goInicio(): void {​

    this.router.navigate([ 'home' ]);​

  }​

​
  onsubmit(): void {​
 if (this.formulari.invalid){
  console.log("invalido formulario")
  return;
 }
  this.vehiculoServicio.registrarCliente(this.formulari.value).subscribe((data =>{
    console.log(data);
    Swal.fire("Registrado con exito!");
    this.router.navigate([ 'home' ]);​​
  })
  )
  
  };
 

​
}
