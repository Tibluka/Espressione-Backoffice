import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private transitionData: boolean = false;
  private stateData = new BehaviorSubject({ modalState: false, action: false || null });
  private modalContentData: any;
  private componentData: any = null;

  get transition() {
    return this.transitionData;
  }

  get state() {
    return this.stateData;
  }

  get component() {
    return this.componentData;
  }

  get modalContent() {
    return this.modalContentData;
  }

  constructor() {
    const that = this;
    document.onkeyup = function (evt: any) {
      evt = evt || window.event;
      if (evt.keyCode == 27 && that.state.value.modalState === true && !that.modalContent?.blockEscKeyToClose) {
        that.close(false);
      }
    };
  }

  open(component: any, options?: { content: any }) {
    this.modalContentData = options?.content;
    this.stateData.next({ modalState: true, action: null });
    this.componentData = component;
  }

  close(action: any) {
    this.setTransition(false);
    // parâmetro action define se o usuário cancelou ou afirmou ao fechar o modal. false === cancelou, true === afirmou
    setTimeout(() => {
      this.stateData.next({ modalState: false, action });
      this.componentData = null;
      this.stateData = new BehaviorSubject({ modalState: false, action: false });
    }, 100);
  }

  setModalContent(content: any) {
    this.modalContentData = content;
  }

  setTransition(state: boolean) {
    this.transitionData = state;
  }

}
