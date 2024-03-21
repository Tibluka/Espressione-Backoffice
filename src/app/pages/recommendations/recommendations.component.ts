import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { RecommendationsService } from 'src/app/services/recommendations/recommendations.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent {

  get recommendationsList() {
    return this.recommendationsService.recommendationsList;
  }

  filters: {
    page: 0,
    size: 10
  }

  constructor(private modalService: ModalService,
    private recommendationsService: RecommendationsService) {
    this.recommendationsService.listAllRecommendations();
    console.log(this.recommendationsList)
  }

  ngOnInit(): void {

  }

  listRecommendations() {
    
  }
}
