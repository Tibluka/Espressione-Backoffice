import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from './recommendations.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RecommendationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: RecommendationsComponent }
    ])
  ]
})
export class RecommendationsModule { }
