import { Component } from '@angular/core';
import { GeneralConfirmModalComponent } from 'src/app/components/general-confirm-modal/general-confirm-modal.component';
import { FeedbacksService } from 'src/app/services/feedbacks/feedbacks.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent {

  get feedbacksList() {
    this.feedbacksService.feedbacksList.content.sort((a, b) => {
      const dateA = new Date(a.dateHourIncluded).getTime();
      const dateB = new Date(b.dateHourIncluded).getTime();
      return dateB - dateA;
    });
  
    return this.feedbacksService.feedbacksList;
  }

  filters: {
    page: 0,
    size: 10
  }

  constructor(private modalService: ModalService,
    private toastService: ToastService,
    private feedbacksService: FeedbacksService) {
    this.feedbacksService.listAllFeedbacks(0, 10);
  }

  ngOnInit(): void {

  }

  listFeedbacks() {

  }

  exclude(feedback: any) {
    let message;
    message = `Deseja confirmar a exclusão do vinho <b>${feedback.description}</b>?`;

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
        const success = await this.feedbacksService.deleteFeedback(feedback.id);
        if (success) {
          this.toastService.show(`Feedback excluído com sucesso!`, {
            classname: 'toast-success', delay: 5000
          })
          this.feedbacksService.listAllFeedbacks(0, 10);
        }
      }
    })
  }

  async seeMoreFeedbacks() {
    if (this.feedbacksList.content.length == this.feedbacksList.totalElements) {
      return
    }
    this.filters.page += 1;
    console.log(this.filters)
    const result = await this.feedbacksService.listAllFeedbacks(0, 10);
    if (result.totalElements === 0) this.filters.page -= 1;
  }

}
