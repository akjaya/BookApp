import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(private authenticationService:AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req)
    req =  req.clone({
      headers: req.headers.set('Authorization','Bearer ' + this.authenticationService.getBearerToken())
    })
    console.log(req)
    return next.handle(req);
  }
}
