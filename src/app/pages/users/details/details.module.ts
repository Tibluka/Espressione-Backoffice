import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { DetailsComponent } from './details.component';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    RouterModule.forChild([
      { path: '', component: DetailsComponent }
    ])
  ]
})
export class DetailsModule { }
