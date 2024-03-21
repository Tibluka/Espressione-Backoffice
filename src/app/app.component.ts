import { Component } from '@angular/core';
import { LoadingService } from './services/loading/loading.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'backoffice-espressione';

  get currentRoute() {
    return location.pathname;
  }

  get loadingState() {
    return this.loadingService.state;
  }

  get loggedUser() {
    return this.userService.loggedUser;
  }

  constructor(private loadingService: LoadingService,
    private userService: UserService) { }
}
