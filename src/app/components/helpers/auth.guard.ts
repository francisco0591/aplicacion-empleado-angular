import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
  CanActivate
} from '@angular/router';

import { Observable } from 'rxjs';
import { EmpleadoService } from '../../services/empleado.service';
import { LoginService } from '../../services/login.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private loginService: LoginService
   ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.loginService.getToken()){
        return true;
      }
      this.router.navigate(['login']);
      return false;

    }




}

