import { Component } from '@angular/core';
import { AddRecommendationComponent } from 'src/app/components/add-recommendation/add-recommendation.component';
import { GeneralConfirmModalComponent } from 'src/app/components/general-confirm-modal/general-confirm-modal.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { RecommendationsService } from 'src/app/services/recommendations/recommendations.service';
import { ToastService } from 'src/app/services/toast/toast.service';

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

  searchTerm: string;
  filter;

  constructor(private modalService: ModalService,
    private toastService: ToastService,
    private recommendationsService: RecommendationsService) {
    this.recommendationsService.listAllRecommendations();
    console.log(this.recommendationsList)
  }

  ngOnInit(): void {

  }

  search(target: any): void {
    let value = target.value;
    this.filter = this.recommendationsList.filter((recommendation) => {
      return recommendation.wine.name.toLowerCase().includes(value)
      || recommendation.wine.wineType?.toLowerCase().includes(value)
      || recommendation.wine.grapeType?.toLowerCase().includes(value)
    });
  }


  listRecommendations() {

  }

  exclude(recommendation: any) {
    let message;
    message = `Deseja confirmar a exclusão da recomendação <b>${recommendation.wine.name}</b>?`;

    this.modalService.open(GeneralConfirmModalComponent, {
      content: {
        title: 'Confirmar exclusão',
        text: message,
        btnConfirmText: 'Confirmar',
        btnCancelText: 'Cancelar'
      }
    })

    this.modalService.state.subscribe(async (onClose) => {
      if (onClose.modalState === false && onClose.action === true) {
        const success = await this.recommendationsService.deleteRecommendation(recommendation.id);
        if (success) {
          this.toastService.show(`Feedback excluído com sucesso!`, {
            classname: 'toast-success', delay: 5000
          })
          this.recommendationsService.listAllRecommendations();
        }
      }
    })
  }

  addRecommendation() {
    this.modalService.open(AddRecommendationComponent)
    this.modalService.state.subscribe(async (onClose) => {
      if (onClose.modalState === false && onClose.action === true) {
        this.toastService.show(`Recomendação criada com sucesso!`, {
          classname: 'toast-success', delay: 5000
        })
        this.recommendationsService.listAllRecommendations();
      }
    })

  }
}
