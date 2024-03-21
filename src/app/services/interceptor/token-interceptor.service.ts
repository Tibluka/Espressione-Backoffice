import { HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

 
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('esp_tkn');
    if (token) {
      let tokenReq = req.clone({
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      })
      return next.handle(tokenReq);
    }
    return next.handle(req);
  }
}
