import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';



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
