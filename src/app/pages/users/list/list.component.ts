import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  get userList() {
    return this.userService.userList;
  }

  filters: {
    page: 0,
    size: 20
  }

  constructor(private modalService: ModalService,
    private router: Router,
    private userService: UserService) {
    this.userService.listAllUsers(0, 20);
  }

  ngOnInit(): void {

  }

  listUsers() {
    
  }

  seeDetails() {
    this.router.navigate(['users/details']);
  }
}
