import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { countries } from 'src/app/models/consts/countries';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ValidatorService } from 'src/app/services/validator/validator.service';
import { WineCellarService } from 'src/app/services/wine-cellar/wine-cellar.service';
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
    automated: new FormControl(null, Validators.required),
/*     name: new FormControl('', Validators.required),
 */  })

  constructor(private modalService: ModalService,
    private wineCellarService: WineCellarService,
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
}

