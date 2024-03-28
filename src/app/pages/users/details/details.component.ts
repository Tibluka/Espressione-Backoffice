import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddWineCellarComponent } from 'src/app/components/add-wine-cellar/add-wine-cellar.component';
import { GeneralConfirmModalComponent } from 'src/app/components/general-confirm-modal/general-confirm-modal.component';
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

  get wineCellarList() {
    return this.wineCellarService.allWineCellarList;
  }

  get userSelected() {
    return this.userService.userList[0];
  }

  filters: {
    page: 0,
    size: 20
  }

  constructor(private modalService: ModalService,
    private wineCellarService: WineCellarService,
    private toastService: ToastService,
    private userService: UserService) {
    this.userService.listAllUsers(0, 20);
    this.wineCellarService.listAllWineCellars();
  }

  ngOnInit(): void {

  }


  addWineCellar() {
    this.modalService.open(AddWineCellarComponent);
    this.modalService.state.subscribe(async (onClose) => {
      if (onClose.modalState === false && onClose.action === true) {
        this.wineCellarService.listAllWineCellars();
      }
    })
  }

  
  exclude(wineCellar: any) {
    let message;
    message = `Deseja confirmar a exclusão da adega <b>${wineCellar}</b>?`;

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
}
