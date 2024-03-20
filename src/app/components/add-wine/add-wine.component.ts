import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ValidatorService } from 'src/app/services/validator/validator.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-wine',
  templateUrl: './add-wine.component.html',
  styleUrls: ['./add-wine.component.scss']
})
export class AddWineComponent extends ValidatorService {

  date;
  
  wineForm: FormGroup = new FormGroup({
    active: new FormControl(true, Validators.required),
    name: new FormControl('', Validators.required),
    wineType: new FormControl('', Validators.required),
    year: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    region: new FormControl('', Validators.required),
    grapeType: new FormControl('', Validators.required),
    alcoholContent: new FormControl('', Validators.required),
    imageURL: new FormControl('https://cdn.dooca.store/1117/products/vinho-maison-louis-jadot-pommard_1600x2000+fill_ffffff.jpg?v=1681216379', Validators.required)
  })

  constructor(private modalService: ModalService) {
    super();
    this.date = moment(new Date()).format('YYYY-MM-DD');
  }

  ngOnInit(): void {

  }

  close(status: boolean) {
    this.modalService.close(status);
  }

  next() {
    
  }
}

