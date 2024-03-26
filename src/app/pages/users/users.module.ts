import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: UsersComponent,
        children: [
          { path: '', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
          { path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) }
        ]
      }
    ])
  ]
})
export class UsersModule { }
