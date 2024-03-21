import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '../loading/loading.service';
import { Wine } from 'src/app/models/wine';
import { ToastService } from '../toast/toast.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  private wineData: Wine = new Wine();
  private allWineListData: Array<Wine> = [];

  get wine() {
    return this.wineData;
  }

  get allWineList() {
    return this.allWineListData;
  }

  constructor(private http: HttpClient,
    private loadingService: LoadingService,
    private toastService: ToastService) {

  }

  async addWine(wine: Wine) {
    this.toastService.clear();
    this.loadingService.setLoadingState(true);
    try {
      await this.http.post(`${environment.url}/secure/wine`, wine).toPromise();
      this.toastService.show('Vinho criado com sucesso!',
        { classname: 'toast toast-success' });
      this.loadingService.setLoadingState(false);
    } catch (error) {
      this.toastService.show(error.error.message,
        { classname: 'toast toast-danger' })
      this.loadingService.setLoadingState(false);
    }
  }

  async listAllWines() {
    this.toastService.clear();
    this.loadingService.setLoadingState(true);
    try {
      const wines = await this.http.get<Array<Wine>>(`${environment.url}/secure/wine`).toPromise();
      this.allWineListData = wines;
      this.loadingService.setLoadingState(false);
      return true
    } catch (error) {
      this.toastService.show(error.error.message,
        { classname: 'toast toast-danger' })
      this.loadingService.setLoadingState(false);
      return false
    }
  }
}