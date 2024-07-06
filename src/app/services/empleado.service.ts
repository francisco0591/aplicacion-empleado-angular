import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';
import {  map } from 'rxjs/operators';
import { Credencial } from '../models/credencial';
import { Respuesta } from '../models/respuesta';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url_base = "api/empleado"
  private cabeceras : HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http : HttpClient) { }

  public listarEmpleado() : Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.url_base}/`);
  }

  public buscarxId(id: number){
    return this.http.get<Empleado>(`${this.url_base}/buscarxId/${id}`)
  }

  public registrarEmpleado(empleado : Empleado){
        return this.http.post<Empleado>(`${this.url_base}/save`,empleado)
  }

  public actualizarEmpleado(empleado : Empleado){
       return this.http.put<Empleado>(`${this.url_base}/update/${empleado.id}`,empleado)
  }

  public eliminarEmpleado(id: number) : Observable<void>{
       return this.http.delete<void>(`${this.url_base}/delete/${id}`) ;
  }


}
