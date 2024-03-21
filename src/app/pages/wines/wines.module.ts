import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinesComponent } from './wines.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    WinesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,  
    RouterModule.forChild([
      { path: '', component: WinesComponent }
    ])
  ]
})
export class WinesModule { }
