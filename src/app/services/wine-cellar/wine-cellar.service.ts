import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wine } from 'src/app/models/wine';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../loading/loading.service';
import { ToastService } from '../toast/toast.service';
import { WineCellar } from 'src/app/models/winecellar';

@Injectable({
  providedIn: 'root'
})
export class WineCellarService {
  private wineCellarData: any;
  private allWineCellarListData: Array<WineCellar> = [];
  private WineCellarByUserListData: Array<WineCellar> = [];

  get winecellar() {
    return this.wineCellarData;
  }

  get allWineCellarList() {
    return this.allWineCellarListData;
  }

  get wineCellarByUserList() {
    return this.WineCellarByUserListData;
  }


  constructor(private http: HttpClient,
    private loadingService: LoadingService,
    private toastService: ToastService) {

  }

  async addWine(wineCellarId: string, wineId: string, drawer: string | number) {
    this.toastService.clear();
    this.loadingService.setLoadingState(true);
    try {
      const response = await this.http.post(`${environment.url}/secure/winehouse/addWine/${wineCellarId}/${wineId}/${drawer}`, null).toPromise();
      this.loadingService.setLoadingState(false);
      return response;
    } catch (error) {
      this.toastService.show(error.error.message,
        { classname: 'toast toast-danger' })
      this.loadingService.setLoadingState(false);
      return null;
    }
  }


  async addWineCellar(wine: Wine) {
    this.toastService.clear();
    this.loadingService.setLoadingState(true);
    try {
      const response = await this.http.post(`${environment.url}/secure/winehouse`, wine).toPromise();
      this.toastService.show('Adega criada com sucesso!',
        { classname: 'toast toast-success' });
      this.loadingService.setLoadingState(false);
      return response
    } catch (error) {
      this.toastService.show(error.error.message,
        { classname: 'toast toast-danger' })
      this.loadingService.setLoadingState(false);
      return null
    }
  }

  async listAllWineCellars() {
    this.toastService.clear();
    this.loadingService.setLoadingState(true);
    try {
      const wineCellars = await this.http.get<Array<WineCellar>>(`${environment.url}/secure/winehouse`).toPromise();
      this.allWineCellarListData = wineCellars;
      this.loadingService.setLoadingState(false);
      return true
    } catch (error) {
      this.toastService.show(error.error.message,
        { classname: 'toast toast-danger' })
      this.loadingService.setLoadingState(false);
      return false
    }
  }

  async listWineCellarsByUser(userId: string) {
    this.toastService.clear();
    this.loadingService.setLoadingState(true);
    try {
      const wineCellarsByUser = await this.http.get<Array<WineCellar>>(`${environment.url}/secure/winehouse/user/${userId}`).toPromise();
      this.WineCellarByUserListData = wineCellarsByUser;
      this.loadingService.setLoadingState(false);
      return true
    } catch (error) {
      this.toastService.show(error.error.message,
        { classname: 'toast toast-danger' })
      this.loadingService.setLoadingState(false);
      return false
    }
  }

  async deleteWineCellar(wineCellarId: string) {
    try {
      this.loadingService.setLoadingState(true);
      await this.http.delete(`${environment.url}/secure/winehouse/${wineCellarId}`).toPromise();
      this.loadingService.setLoadingState(false);
      return true;
    } catch (error) {
      this.loadingService.setLoadingState(false);
      return null;
    }
  }
}