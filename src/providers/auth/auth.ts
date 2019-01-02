import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthProvider {

  private url ='http://www.safit.cl/api/Login'

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  validarUsuario(rut:string){
    return this.http.post(this.url,{rut});
  }

}
