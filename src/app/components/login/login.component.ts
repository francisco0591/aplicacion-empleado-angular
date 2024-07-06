import { Component, OnInit } from '@angular/core';
import { Credencial } from '../../models/credencial';
import { EmpleadoService } from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  cred : Credencial = {
    username: '',
    password : ''
  };

  constructor(private loginService : LoginService,
    private router : Router
  ){}

  ngOnInit(): void {
   // localStorage.removeItem("token");
  }

  login(form: NgForm){
    this.loginService.login(this.cred)
    .subscribe(response => {
      console.log('token22'+response.token);
      const token2 = response.token;
      localStorage.setItem('token',token2);
      this.loginService.getToken();
      this.router.navigate(['empleados'])
    })

  }


}
