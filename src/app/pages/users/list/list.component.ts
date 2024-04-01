import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
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

  seeDetails(user: User) {
    const userJSON = JSON.stringify(user);
    this.router.navigate(['users/details'], {
      queryParams: {
        user: userJSON
      }
    });
  }

  async seeMoreUsers() {
    if (this.userList.content.length == this.userList.totalElements) {
      return
    }
    this.filters.page += 1;
    console.log(this.filters)
    const result = await this.userService.listAllUsers(0, 20);
    if (result === 0) this.filters.page -= 1;
  }


}
