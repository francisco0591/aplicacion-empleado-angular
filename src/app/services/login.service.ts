import { Inject, Injectable } from '@angular/core';
import { Credencial } from '../models/credencial';
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/respuesta';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url_base = "api/login"

  constructor(private http : HttpClient) {

   }

  login(cred : Credencial){
    return this.http.post<Respuesta>(`${this.url_base}`,cred)
  }
  getToken() {
    return localStorage.getItem('token');
}

}
