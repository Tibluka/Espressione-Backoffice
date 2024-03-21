import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  get userList() {
    return this.userService.userList;
  }

  filters: {
    page: 0,
    size: 20
  }

  constructor(private modalService: ModalService,
    private userService: UserService) {
    this.userService.listAllUsers(0, 20);
  }

  ngOnInit(): void {

  }

  listUsers() {
    
  }
}
