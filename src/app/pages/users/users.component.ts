import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(private modalService: ModalService,
    private router: Router,
    private userService: UserService) {
    this.userService.listAllUsers(0, 20);
  }

  ngOnInit(): void {

  }

}
