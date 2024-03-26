import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/Modelos/Vehiculo';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

constructor( private http: HttpClient) { }

baseUrl= "http://www.epico.gob.ec/vehiculo/public/api/";
httpOpcions ={
  headers : new HttpHeaders ({'Content-Type': 'application/json'})


};


getVehiculos(filtro?:string, rows?:number, page?:number):Observable<Respuesta>{
  let body = new HttpParams();
  body = filtro ? body.set('filtro', filtro): body;
  body = rows ? body.set('rows', rows): body;
  body = page ? body.set('page', page): body;

  return this.http.get<Respuesta>(this.baseUrl + "vehiculos/", { params: body })
  }
      
getclientes(){
 return this.http.get(this.baseUrl + "clientes/")
 
}
registrarCliente(cliente:any){
  return this.http.post(this.baseUrl+"cliente/", cliente, this.httpOpcions )
}


insertvehiculo(vehiculo:Vehiculo){
 
  return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculo, this.httpOpcions);
}

/*
getVehiculos(filtro:any):Observable<Array<Vehiculo>>{
  const escucha:Observable<Array<Vehiculo>>= new Observable ( escuchando => {
    let lista = this.listavehiculos.filter( elem => elem.marca.toLowerCase().includes(filtro.toLowerCase()))
    escuchando.next(lista);
  });
  return escucha;
}
*/

getVehiculo(codigo: string){
  return  this.http.get<Respuesta>(this.baseUrl+"vehiculo/"+codigo);
}

actualizarvehiculo(vehiculo:Vehiculo, codigo:string){
  return  this.http.put<Respuesta>(this.baseUrl+"vehiculo/"+codigo, vehiculo, this.httpOpcions);
}

eliminarVehiculo(codigo:string){
  return  this.http.delete<Respuesta>(this.baseUrl+"vehiculo/"+codigo);
}




addVehiculo(vehiculo: Vehiculo){
  this.listavehiculos.push(vehiculo);
}

public listavehiculos: Array<Vehiculo> = [
  {codigo: "01", marca: 'Chevrolet', modelo:"OMIX-3", color:"Rojo", kilometraje: "0", precio:20000, foto: 'https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/onix-auto-deportivo/agosto-2023/colorizers/2023-jelly-onix-rs-rojo.png?imwidth=1200',anio:2023, calificacion: 4},
  {codigo: "02", marca: 'Kia', modelo:"RIO-4", color:"Rojo", kilometraje: "0", precio:19000, foto:'https://www.kia.com/us/content/dam/kia/us/en/vehicles/rio/2023/trims/s-tech-package/exterior/f21a27/360/01.png/jcr:content/renditions/desktop.png', anio:2023, calificacion: 5},
  {codigo: "03", marca: 'Chery', modelo:"ARRIZO-5", color:"Blanco", kilometraje: "5000", precio:11000, foto:'https://www.maresacenter.com/hubfs/CHERY/WEB%202022/Arrizo%205%20pro/Copia%20de%20B0074293-BAJA.jpg', anio:2020, calificacion: 2},
  {codigo: "04", marca: 'Toyota', modelo:"AGYA", color:"Rojo", kilometraje: "10000", precio:8000, foto:'https://www.toyota.com.ec//admin/sites/default/files/2023-08/toyota-agya-color-rojo.png', anio:2022, calificacion: 3},
  {codigo: "05", marca: 'Hyundai', modelo:"ACCENT", color:"Rojo", kilometraje: "1000", precio:15000, foto:'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_175e8c1593744170b8d3664a6dd69015.webp', anio:2022, calificacion: 4}
  
];
}
 export interface Respuesta{
  codigo: string ;
  mensaje: string;
  data: Array<Vehiculo> | Vehiculo |any;
  rows:number;
  pages: number;
  records:number;
  page:number;
  foto:string;
 }