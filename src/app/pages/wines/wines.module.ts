import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinesComponent } from './wines.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WinesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WinesComponent }
    ])
  ]
})
export class WinesModule { }
