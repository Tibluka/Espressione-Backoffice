import { Component } from '@angular/core';
import { AddWineComponent } from 'src/app/components/add-wine/add-wine.component';
import { ModalService } from 'src/app/services/modal/modal.service';
import { WineService } from 'src/app/services/wine/wine.service';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html',
  styleUrls: ['./wines.component.scss']
})
export class WinesComponent {

  get allWinesList() {
    return this.wineService.allWineList;
  }

  searchTerm: string;
  filter;

  constructor(private modalService: ModalService,
    private wineService: WineService) {
    this.wineService.listAllWines();
  }

  ngOnInit(): void {

  }

  addWine() {
    this.modalService.open(AddWineComponent)
  }

  search(target: any): void {
    let value = target.value;
    this.filter = this.allWinesList.filter((wine) => {
      return wine.name.toLowerCase().includes(value)
        || wine.wineType?.toLowerCase().includes(value)
    });
  }


}

