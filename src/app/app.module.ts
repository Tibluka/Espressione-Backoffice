import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/general/menu/menu.component';
import { LoadingComponent } from './components/general/loading/loading.component';
import { ModalComponent } from './components/general/modal/modal.component';
import { HeaderComponent } from './components/general/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoadingComponent,
    ModalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
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
