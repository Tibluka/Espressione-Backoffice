import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ValidatorService } from 'src/app/services/validator/validator.service';
import * as moment from 'moment';
import { ToastService } from 'src/app/services/toast/toast.service';
import { WineService } from 'src/app/services/wine/wine.service';
import { countries } from 'src/app/models/consts/countries';

@Component({
  selector: 'app-add-wine',
  templateUrl: './add-wine.component.html',
  styleUrls: ['./add-wine.component.scss']
})
export class AddWineComponent extends ValidatorService {

  year;
  active: boolean = true;
  countriesList = countries;

  wineForm: FormGroup = new FormGroup({
    active: new FormControl(null, Validators.required),
    name: new FormControl('', Validators.required),
    wineType: new FormControl('', Validators.required),
    year: new FormControl(null, Validators.required),
    country: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    grapeType: new FormControl('', Validators.required),
    alcoholContent: new FormControl(null, Validators.required),
    imageURL: new FormControl('https://cdn.dooca.store/1117/products/vinho-maison-louis-jadot-pommard_1600x2000+fill_ffffff.jpg?v=1681216379', Validators.required)
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
          class: 'lg'
        }
      )
    }, 1);
  }

  close(status: boolean) {
    this.modalService.close(status);
  }

  next() {
    const alcoholContent = this.wineForm.get('alcoholContent').value;
    const year = this.wineForm.get('year').value;
    this.wineForm.get('alcoholContent').setValue(Number(alcoholContent));
    this.wineForm.get('year').setValue(Number(year));
    
    const controls = this.wineForm.controls;
    for (let c in controls) {
      if (this.wineForm.controls[c].invalid) {
        this.wineForm.controls[c]
          .markAsTouched();
      }
    }

    if (this.wineForm.invalid) {
      this.toastService.show('Formulário inválido. Verifique os campos marcados.', {
        classname: 'toast-alert toast'
      })
      return;
    } else {
      const success = this.wineService.addWine(this.wineForm.value);
      if (success) {
        this.modalService.close(true);
      }
    }
  }
}

