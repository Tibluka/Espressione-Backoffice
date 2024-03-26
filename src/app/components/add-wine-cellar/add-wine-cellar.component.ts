import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { countries } from 'src/app/models/consts/countries';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ValidatorService } from 'src/app/services/validator/validator.service';
import { WineService } from 'src/app/services/wine/wine.service';

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
    active: new FormControl(null, Validators.required),
    name: new FormControl('', Validators.required),
    wineType: new FormControl('', Validators.required),
    dateHourIncluded: new FormControl('', Validators.required),
    userIdOwner: new FormControl('', Validators.required)
  })

  constructor(private modalService: ModalService,
    private wineService: WineService,
    private toastService: ToastService) {
    super();
    this.year = moment(new Date()).year();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.modalService.setModalContent(
        {
          class: 'md'
        }
      )
    }, 1);
  }

  close(status: boolean) {
    this.modalService.close(status);
  }

  next() {
    const alcoholContent = this.wineCellarForm.get('alcoholContent').value;
    const year = this.wineCellarForm.get('year').value;
    this.wineCellarForm.get('alcoholContent').setValue(Number(alcoholContent));
    this.wineCellarForm.get('year').setValue(Number(year));
    
    const controls = this.wineCellarForm.controls;
    for (let c in controls) {
      if (this.wineCellarForm.controls[c].invalid) {
        this.wineCellarForm.controls[c]
          .markAsTouched();
      }
    }

    if (this.wineCellarForm.invalid) {
      this.toastService.show('Formulário inválido. Verifique os campos marcados.', {
        classname: 'toast-alert toast'
      })
      return;
    } else {
      const success = this.wineService.addWine(this.wineCellarForm.value);
      if (success) {
        this.modalService.close(true);
      }
    }
  }
}

