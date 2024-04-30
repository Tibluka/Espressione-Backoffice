import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMultipleSelectComponent } from './custom-multiple-select.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomMultipleSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CustomMultipleSelectComponent
  ]
})
export class CustomMultipleSelectModule { }
