import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  get loggedUser() {
    return this.userService.loggedUser;
  }
  
  get menuState(){
    return this.menuService.menuState;
  }

  constructor(private router: Router,
    private userService: UserService,
    private menuService: MenuService) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  openMenu() {
    this.menuService.setMenuState(!this.menuState);
  }

}
