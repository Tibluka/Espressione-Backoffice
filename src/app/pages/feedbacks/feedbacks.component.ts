import { Component } from '@angular/core';
import { FeedbacksService } from 'src/app/services/feedbacks/feedbacks.service';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent {

  get feedbacksList() {
    return this.feedbacksService.feedbacksList;
  }

  filters: {
    page: 0,
    size: 10
  }

  constructor(private modalService: ModalService,
    private feedbacksService: FeedbacksService) {
    this.feedbacksService.listAllFeedbacks(0, 10);
  }

  ngOnInit(): void {

  }

  listFeedbacks() {
    
  }
}
