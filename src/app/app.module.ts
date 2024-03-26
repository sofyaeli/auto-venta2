import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagineModule } from './paginas/pagineModule';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserinterceptorService } from './interceptores/Userinterceptor.service';



@NgModule({
  declarations: [			
     AppComponent,
   
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagineModule,
    FontAwesomeModule,
    HttpClientModule
   
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserinterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
