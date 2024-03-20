import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WineCellarsComponent } from './wine-cellars.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WineCellarsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: WineCellarsComponent }
    ])
  ]
})
export class WineCellarsModule { }
