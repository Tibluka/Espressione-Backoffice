import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddWineCellarComponent } from 'src/app/components/add-wine-cellar/add-wine-cellar.component';
import { GeneralConfirmModalComponent } from 'src/app/components/general-confirm-modal/general-confirm-modal.component';
import { User } from 'src/app/models/user';
import { FeedbacksService } from 'src/app/services/feedbacks/feedbacks.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { UserService } from 'src/app/services/user/user.service';
import { WineCellarService } from 'src/app/services/wine-cellar/wine-cellar.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  get userList() {
    return this.userService.userList;
  }

  get wineCellarByUserList() {
    return this.wineCellarService.wineCellarByUserList;
  }


  get feedbacksList() {
    this.feedbacksService.feedbacksList?.content.sort((a, b) => {
      const dateA = new Date(a.dateHourIncluded).getTime();
      const dateB = new Date(b.dateHourIncluded).getTime();
      return dateB - dateA;
    });

    return this.feedbacksService.feedbacksList;
  }


  filters: {
    page: 0,
    size: 20
  }

  userSelected: User = new User();

  constructor(private modalService: ModalService,
    private wineCellarService: WineCellarService,
    private activatedRoute: ActivatedRoute,
    private feedbacksService: FeedbacksService,
    private toastService: ToastService,
    private userService: UserService) {
    this.userService.listAllUsers(0, 20);
    this.wineCellarService.listAllWineCellars();
    this.feedbacksService.listAllFeedbacks(0, 10);
    const { user } = this.activatedRoute.snapshot.queryParams;
    if (user) {
      this.userSelected = JSON.parse(user);
      this.wineCellarService.listWineCellarsByUser(this.userSelected.id);
    }
  }

  ngOnInit(): void {

  }


  addWineCellar() {
    this.modalService.open(AddWineCellarComponent);
    this.modalService.state.subscribe(async (onClose) => {
      if (onClose.modalState === false && onClose.action === true) {
        await this.wineCellarService.listWineCellarsByUser(this.userSelected.id);
      }
    })
  }


  exclude(wineCellar: any) {
    let message;
    message = `Deseja confirmar a exclusão da adega <b>${wineCellar.name}</b>?`;

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
        const success = await this.wineCellarService.deleteWineCellar(wineCellar.id);
        if (success) {
          this.toastService.show(`Feedback excluído com sucesso!`, {
            classname: 'toast-success', delay: 5000
          })
          this.wineCellarService.listAllWineCellars();
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
