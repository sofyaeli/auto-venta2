import { NgModule } from '@angular/core' ;
import { PaglistavehiculosComponent } from './paglistavehiculos/paglistavehiculos.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UtilitarioModuleModule } from '../utilitarios/utilitarioModule';
import { RouterModule } from '@angular/router';
import { PagVehiculoComponent } from './PagVehiculo/PagVehiculo.component';
import { PagVehiculoRegistroComponent } from './PagVehiculoRegistro/PagVehiculoRegistro.component';
import { RegistroclientesComponent } from './registroclientes/registroclientes.component';
import { DetalleDeVehiculosComponent } from './detalleDeVehiculos/detalleDeVehiculos.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule(
    {
        imports: [
           CommonModule,
           FormsModule,
           UtilitarioModuleModule,
           RouterModule,
           ReactiveFormsModule,
           FontAwesomeModule
         
        ],
        declarations: [
            PaglistavehiculosComponent,
             PagVehiculoComponent,
             PagVehiculoRegistroComponent,
             RegistroclientesComponent,
             DetalleDeVehiculosComponent
        ],
        exports: [
             PaglistavehiculosComponent,
            PagVehiculoComponent,
            PagVehiculoRegistroComponent,
            
        ]
    })
    export class PagineModule{

    }