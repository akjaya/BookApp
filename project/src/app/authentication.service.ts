import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { register } from './register';
import { login } from './login';
import { edit } from './edit';
import { user } from './user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

   getusers(userr: user): Observable<any> {
    console.log("GET USER");
    console.log(userr.username);
    console.log(userr.password);
    return this.httpClient.post<any>(`http://localhost:8080/api/users`, userr, { headers: new HttpHeaders().set('responseType', 'text')}).pipe(
      map(
        userData => {
         sessionStorage.setItem('username',userr.username);
         let tokenStr = userData.token;
         console.log("Token string: " + tokenStr);
         localStorage.setItem('token', tokenStr);
         return userData;
        }
      )
    );
    
  }

  addUser(register: register): Observable<register> {
    return this.httpClient.post<register>('http://localhost:8080/api/users/create', register);
  }
  editUser(edit: edit, id:number): Observable<register> {
    return this.httpClient.put<register>(`http://localhost:8080/api/users?=${id}`, edit);
  }
  setBearerToken(token: string) {
    sessionStorage.setItem('token',token);
  }
  getBearerToken() {
    return sessionStorage.getItem('token');
  }
}