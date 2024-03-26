import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '../loading/loading.service';
import { Recommendations } from 'src/app/models/recommendations';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecommendationsService {

  private recommendationsListData: Array<Recommendations> = [];

  get recommendationsList() {
    return this.recommendationsListData;
  }

  constructor(private http: HttpClient,
    private loadingService: LoadingService) {

  }

  async listAllRecommendations() {
    try {
      this.loadingService.setLoadingState(true);
      const recommendationsList = await this.http.get<any>(`${environment.url}/secure/recommendation`).toPromise();
      this.recommendationsListData = recommendationsList;
      this.loadingService.setLoadingState(false);
      return recommendationsList;
    } catch (error) {
      this.loadingService.setLoadingState(false);
      return null;
    }
  }

  async deleteRecommendation(recommendationId: string) {
    try {
      this.loadingService.setLoadingState(true);
      await this.http.delete(`${environment.url}/secure/recommendation/${recommendationId}`).toPromise();
      this.loadingService.setLoadingState(false);
      return true;
    } catch (error) {
      this.loadingService.setLoadingState(false);
      return null;
    }
  }

  async addRecommendation(wine: {wine: { id: string }}) {
    try {
      this.loadingService.setLoadingState(true);
      await this.http.post(`${environment.url}/secure/recommendation`, wine).toPromise();
      this.loadingService.setLoadingState(false);
      return true;
    } catch (error) {
      this.loadingService.setLoadingState(false);
      return null;
    }
  }
}
