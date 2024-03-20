import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomationRequestsComponent } from './automation-requests.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AutomationRequestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AutomationRequestsComponent }
    ])
  ]
})
export class AutomationRequestsModule { }
