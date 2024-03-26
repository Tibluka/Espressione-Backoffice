import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddWineComponent } from './components/add-wine/add-wine.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './services/interceptor/token-interceptor.service';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { ToastModule } from './components/general/toast/toast.module';
import { LoadingComponent } from './components/general/loading/loading.component';
import { AddWineCellarComponent } from './components/add-wine-cellar/add-wine-cellar.component';
import { GeneralConfirmModalComponent } from './components/general-confirm-modal/general-confirm-modal.component';
import { AddRecommendationComponent } from './components/add-recommendation/add-recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    AddWineComponent,
    LoadingComponent,
    AddWineCellarComponent,
    GeneralConfirmModalComponent,
    AddRecommendationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective, 
    NgxMaskPipe,
    RouterModule.forRoot([
      {
        path: '', component: AppComponent,
        children: [
          { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
        ]
      },
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    ]),
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
