import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddWineCellarComponent } from 'src/app/components/add-wine-cellar/add-wine-cellar.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  get userList() {
    return this.userService.userList;
  }

  get userSelected() {
    return this.userService.userList[0];
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

  
  addWineCellar() {
    this.modalService.open(AddWineCellarComponent)
  }
}
