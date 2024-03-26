import { NgModule } from '@angular/core';
import { AEspacioPipe } from './AEspacio.pipe';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule
    
  ],
  declarations: [
    AEspacioPipe,
    CalificacionesComponent,
    
  ],
  exports: [
    AEspacioPipe,
    CalificacionesComponent,
    
    
  ]
})
export class UtilitarioModuleModule { }
