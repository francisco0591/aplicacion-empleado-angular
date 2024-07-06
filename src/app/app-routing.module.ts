import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadoFormComponent } from './components/empleado/empleado-form.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/helpers/auth.guard';

const routes: Routes = [
  {path : '' ,component:LoginComponent , canActivate : [AuthGuard]},
  {path : 'login' , component : LoginComponent},
  { path : 'empleados',component : EmpleadoComponent , canActivate : [AuthGuard]},
  {path: 'empleado/form', component: EmpleadoFormComponent , canActivate : [AuthGuard]},
  {path: 'empleado/form/:id', component: EmpleadoFormComponent , canActivate : [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
