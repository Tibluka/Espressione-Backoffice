import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbacksComponent } from './feedbacks.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FeedbacksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FeedbacksComponent }
    ])
  ]
})
export class FeedbacksModule { }
