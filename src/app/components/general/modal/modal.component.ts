import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  content = null;

  get transition() {
    return this.modalService.transition;
  }

  @Input() component: any = null;

  get modalContent() {
    return this.modalService.modalContent;
  }

  constructor(private modalService: ModalService) {
    const that = this;
    window.addEventListener('click', (e: any) => {
      if (!e) return;
    });
  }

  ngOnInit(): void {
    this.content = document.getElementById("clickbox");
    this.content.addEventListener('click', this.onClickOutside(this.content));

    setTimeout(() => {
      this.modalService.setTransition(true)
    }, 1);
  }

  ngOnDestroy() {
    window.removeEventListener("click", () => { });
  }

  onClickOutside(e) {        
    if (this.content && !this.content.contains(e.target)) {
      this.close();
    }
  }

  close() {
    if (this.transition) {
      this.modalService.close(false);
    }
  }

}

