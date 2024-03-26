import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ModalService } from 'src/app/services/modal/modal.service';
import { RecommendationsService } from 'src/app/services/recommendations/recommendations.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ValidatorService } from 'src/app/services/validator/validator.service';
import { WineService } from 'src/app/services/wine/wine.service';

@Component({
  selector: 'app-add-recommendation',
  templateUrl: './add-recommendation.component.html',
  styleUrls: ['./add-recommendation.component.scss']
})
export class AddRecommendationComponent extends ValidatorService {

  get allWinesList() {
    return this.wineService.allWineList;
  }

  wineId: string = null;
  invalid: boolean = false;

  constructor(private modalService: ModalService,
    private recommendationsService: RecommendationsService,
    private wineService: WineService,
    private toastService: ToastService) {
    super();
    this.wineService.listAllWines();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.modalService.setModalContent(
        {
          class: 'lg'
        }
      )
    }, 1);
  }

  close(status: boolean) {
    this.modalService.close(status);
  }


  next() {
    if (this.wineId === null) {
      this.invalid = true;
      this.toastService.show('Selecione um vinho.', {
        classname: 'toast-alert toast'
      })
      return;
    } else {
      const success = this.recommendationsService.addRecommendation({ wine: { id: this.wineId } });
      if (success) {
        this.modalService.close(true);
      }
    }
  }


}
