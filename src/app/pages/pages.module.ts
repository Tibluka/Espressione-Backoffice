import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: PagesComponent,
        children: [
          { path: 'wines', loadChildren: () => import('./wines/wines.module').then(m => m.WinesModule) },
          { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
          { path: 'wine-cellars', loadChildren: () => import('./wine-cellars/wine-cellars.module').then(m => m.WineCellarsModule) },
          { path: 'feedbacks', loadChildren: () => import('./feedbacks/feedbacks.module').then(m => m.FeedbacksModule) },
          { path: 'automation-requests', loadChildren: () => import('./automation-requests/automation-requests.module').then(m => m.AutomationRequestsModule) },
          { path: 'recommendations', loadChildren: () => import('./recommendations/recommendations.module').then(m => m.RecommendationsModule) },
        ]
      }
    ])
  ]
})
export class PagesModule { }
