import { Component } from '@angular/core';
import { AddWineComponent } from 'src/app/components/add-wine/add-wine.component';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent {


  constructor(private modalService: ModalService) {

  }
  ngOnInit(): void {

  }

  addWine() {
    this.modalService.open(AddWineComponent)
  }
}

