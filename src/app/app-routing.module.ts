import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/Home/Home.component';
import { PaglistavehiculosComponent } from './paginas/paglistavehiculos/paglistavehiculos.component';
import { PageNotFoundComponent } from './paginas/PageNotFound/PageNotFound.component';
import { PagVehiculoComponent } from './paginas/PagVehiculo/PagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { RegistroclientesComponent } from './paginas/registroclientes/registroclientes.component';
import { DetalleDeVehiculosComponent } from './paginas/detalleDeVehiculos/detalleDeVehiculos.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "registrarse",
    component: RegistroclientesComponent
  },
  {
    path: "vehiculos",
    component: PaglistavehiculosComponent
  },
  {
    path: "vehiculo",
    component: PagVehiculoRegistroComponent
  },
   

  {
    path: "vehiculos/:codigo",
    component: PagVehiculoComponent
  },
  {
    path: "detalle/:codigo",
    component: DetalleDeVehiculosComponent
   },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent,
    pathMatch: "full"
  },



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
