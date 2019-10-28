import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PlayerItemComponent } from './components/player-item/player-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { AccountModule } from './components/account/account.module';
import { AuthentificationModule } from './components/authentification/authentification.module';

import { AppInterceptorService } from './services/app-interceptor.service';
import { UserService, TokenStorageService } from './services';
import { JwthelperService } from './helpers';
import { LocalStorageService } from '@rars/ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    PlayerItemComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    AccountModule,
    AuthentificationModule
  ],
  providers: [
    UserService,
    JwthelperService,
    LocalStorageService,
    TokenStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
