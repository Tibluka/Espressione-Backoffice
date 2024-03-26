import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-general-confirm-modal',
  templateUrl: './general-confirm-modal.component.html',
  styleUrls: ['./general-confirm-modal.component.scss']
})
export class GeneralConfirmModalComponent {

  get modalContent() {
    return this.modalService.modalContent;
  }

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  close(status: boolean) {
    this.modalService.close(status);
  }

}
