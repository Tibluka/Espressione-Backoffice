import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent,
        children: [
          { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
        ]
      },
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
