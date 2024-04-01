import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    RouterModule.forChild([
      { path: '', component: ListComponent }
    ])
  ]
})
export class ListModule { }
