import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingState: boolean = false;
  private blockLoading: boolean = false;

  get state() {
    return this.loadingState;
  }

  get block() {
    return this.blockLoading;
  }

  constructor() { }

  setLoadingState(state: boolean) {
    if (this.block) return;
    this.loadingState = state;
  }

  setBlockLoading(state: boolean) {
    this.blockLoading = state;
  }

}
