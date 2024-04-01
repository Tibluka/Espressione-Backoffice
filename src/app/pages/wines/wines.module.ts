import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinesComponent } from './wines.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WinesComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,  
    FormsModule,
    RouterModule.forChild([
      { path: '', component: WinesComponent }
    ])
  ]
})
export class WinesModule { }
