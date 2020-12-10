import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { UserLogin } from './../model/userLogin';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }
  logar(userLogin: UserLogin){
    return this.http.post ('http://localhost:8080/usuarios/logar',userLogin)
  }
  cadastrar(user: User){
    return this.http.post('http://localhost:8080/usuarios/cadastrar',user)
  }
  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')
    if(token != null){
      ok = true
    }
    return ok
  }
  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')
    if(token==null){
      ok=true
    }
    return ok
  }
}
