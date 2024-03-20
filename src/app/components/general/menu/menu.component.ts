import { Component, HostListener } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.menuState === true && event.target.outerWidth <= 800) {
      this.menuService.setMenuState(false);
    } else if (event.target.outerWidth > 800) {
      this.menuService.setMenuState(true);
    }
  }

  public menuItems = [{
    route: '',
    description: '',
    icon: ''
  }];

  get loggedUser() {
    return this.userService.loggedUser;
  }

  get currentRoute() {
    return location.pathname
  }

  get menuState() {
    return this.menuService.menuState;
  }

  constructor(private userService: UserService,
    private menuService: MenuService) {
    this.menuItems = []
  }

  ngOnInit(): void {
  }



}
