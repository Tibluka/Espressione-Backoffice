import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../loading/loading.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loggedUserData: User = new User();
  private userListData: Array<User> = [];

  get loggedUser() {
    return this.loggedUserData;
  }

  get userList() {
    return this.userListData;
  }

  constructor(private http: HttpClient,
    private loadingService: LoadingService) {
    const loggedUserString = localStorage.getItem('loggedUser');
    if (loggedUserString) {
      const loggedUser = JSON.parse(loggedUserString);
      this.loggedUserData = loggedUser;
    }
  }

  async setLoggedUser() {
    try {
      this.loadingService.setLoadingState(true);
      const user = await this.http.get<any>(`${environment.url}/secure/user`).toPromise();
      localStorage.setItem('loggedUser', JSON.stringify(user));
      this.loggedUserData = user;
      this.loadingService.setLoadingState(false);
      return user;
    } catch (error) {
      this.loadingService.setLoadingState(false);
      return null;
    }
  }

  async listAllUsers(page: number, size: number) {
    try {
      this.loadingService.setLoadingState(true);
      const userList = await this.http.get<any>(`${environment.url}/secure/user/list/?userTypeEnum=CLIENTE_ESPRESSIONE&userStatusEnum=ACTIVE&page=${page}&size=${size}`).toPromise();
      this.userListData = userList;
      return userList;
    } catch (error) {
      this.loadingService.setLoadingState(false);
      return null;
    }
  }
}
