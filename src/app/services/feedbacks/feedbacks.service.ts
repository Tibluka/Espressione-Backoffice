import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback, FeedbacksList } from 'src/app/models/feedback';
import { LoadingService } from '../loading/loading.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  private feedbacksListData: FeedbacksList = null;

  get feedbacksList() {
    return this.feedbacksListData;
  }

  constructor(private http: HttpClient,
    private loadingService: LoadingService) {

  }

  async listAllFeedbacks(page: number, size: number) {
    try {
      this.loadingService.setLoadingState(true);
      const feedbacksList = await this.http.get<FeedbacksList>(`${environment.url}/secure/feedback?size=${size}&page=${page}`).toPromise();
      this.feedbacksListData = feedbacksList;
      this.loadingService.setLoadingState(false);
      return feedbacksList;
    } catch (error) {
      this.loadingService.setLoadingState(false);
      return null;
    }
  }

  async deleteFeedback(feedbackId: string) {
    try {
      this.loadingService.setLoadingState(true);
      await this.http.delete(`${environment.url}/secure/feedback/${feedbackId}`).toPromise();
      this.loadingService.setLoadingState(false);
      return true;
    } catch (error) {
      this.loadingService.setLoadingState(false);
      return null;
    }
  }
}
