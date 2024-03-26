import { Component, EventEmitter, Input, OnInit, Output, input } from '@angular/core';
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  faStar = faStar;

  @Input() calificacion:any = 0 ;
  @Output() accion = new EventEmitter<any>();
  lista:Array <any>= [];
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.calificacion; i++) {
      this.lista.push(1);
      
    }
  }

    select(){ this.accion.emit(this.calificacion);

    }
   
  

}
