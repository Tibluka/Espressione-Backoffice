import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '../loading/loading.service';
import { UserService } from '../user/user.service';
import { ToastService } from '../toast/toast.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(access: { email: string, password: string }) {
    return this.http.post(`${environment.url}/espressione/api/v1/auth/login`, access);
  }

}

