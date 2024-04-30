import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { countries } from 'src/app/models/consts/countries';
import { CustomOption } from 'src/app/models/customOption';
import { Wine } from 'src/app/models/wine';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ValidatorService } from 'src/app/services/validator/validator.service';
import { WineCellarService } from 'src/app/services/wine-cellar/wine-cellar.service';
import { WineService } from 'src/app/services/wine/wine.service';

class DrawerInfo {
  wine: Wine = new Wine();
}

@Component({
  selector: 'app-add-wine-cellar',
  templateUrl: './add-wine-cellar.component.html',
  styleUrls: ['./add-wine-cellar.component.scss']
})
export class AddWineCellarComponent extends ValidatorService {

  year;
  active: boolean = true;
  countriesList = countries;

  wineCellarForm: FormGroup = new FormGroup({
    automated: new FormControl(null, Validators.required),
    name: new FormControl('', Validators.required),
    drawersQty: new FormControl('', Validators.required),
  })

  drawers: Array<DrawerInfo> = [];
  wineList: Array<CustomOption> = [];

  constructor(private modalService: ModalService,
    private wineCellarService: WineCellarService,
    private wineService: WineService,
    private toastService: ToastService) {
    super();
    this.year = moment(new Date()).year();
  }

  async ngOnInit() {
    await this.wineService.listAllWines();
    this.wineList = this.wineService.allWineList.map((wine: Wine) => {
      return new CustomOption(false, wine.name, wine.id, '');
    });
  }

  close(status: boolean) {
    this.modalService.close(status);
  }

  next() {
    const controls = this.wineCellarForm.controls;
    for (let c in controls) {
      if (this.wineCellarForm.controls[c].invalid) {
        this.wineCellarForm.controls[c]
          .markAsTouched();
      }
    }

    if (this.wineCellarForm.invalid) {
      this.toastService.show('Formulário inválido. Selecione uma opção.', {
        classname: 'toast-alert toast'
      })
      return;
    } else {
      const success = this.wineCellarService.addWineCellar(this.wineCellarForm.value);
      if (success) {
        this.modalService.close(true);
      }
    }
  }

  validateCheck(value: boolean) {
    if (value) this.wineCellarForm.get('drawersQty').enable();
    else this.wineCellarForm.get('drawersQty').disable();
  }

  updateDrawersQty() {

  }

  addWines() {
    const drawersQty = this.wineCellarForm.get('drawersQty').value;

    for (let index = 0; index < drawersQty; index++) {
      this.drawers.push(new DrawerInfo())
    }
  }

  selectOption(customOption: CustomOption) {
    this.wineCellarForm.get(customOption.formControlName).setValue(customOption.value);
  }

}

