import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuStateData: boolean = false;

  get menuState() {
    return this.menuStateData;
  }

  constructor() { }

  setMenuState(state: boolean) {
    this.menuStateData = state;
  }

}
