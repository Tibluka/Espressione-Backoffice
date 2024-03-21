import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(access: { email: string, password: string }) {
    return this.http.post(`${environment.url}/auth/login`, access);
  }

}

