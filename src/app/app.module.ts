import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { LayoutModule } from './layout/layout.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EmpleadoFormComponent } from './components/empleado/empleado-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './components/helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    EmpleadoFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
     provide: HTTP_INTERCEPTORS,useClass : AuthInterceptor,multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
