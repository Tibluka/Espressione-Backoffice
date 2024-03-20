import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { MenuService } from '../services/menu/menu.service';
import { ModalService } from '../services/modal/modal.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  
  get modalState() {
    return this.modalService.state.value.modalState;
  }

  get modalComponent() {
    return this.modalService.component;
  }

  get menuState() {
    return this.menuService.menuState;
  }

  constructor(private userService: UserService,
    private menuService: MenuService,
    private modalService: ModalService) {
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    if (!loggedUser) {
      this.userService.setLoggedUser();
    }
  }
  ngOnInit(): void {
    if (window.innerWidth > 800) {
      this.menuService.setMenuState(true);
    }
  }

}
