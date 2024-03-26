import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  public menuItems = [
    {
      route: '/wines',
      description: 'Vinhos',
    },
    {
      route: '/users',
      description: 'Usuários',
    },
    {
      route: '/feedbacks',
      description: 'Feedbacks',
    },
    {
      route: '/recommendations',
      description: 'Recomendações',
    },
    {
      route: '/automation-requests',
      description: 'Pedidos de automação',
    }
  ];

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
    private menuService: MenuService,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }



}
