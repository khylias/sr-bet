import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PlayerItemComponent } from './components/player-item/player-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { AccountModule } from './components/account/account.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    PlayerItemComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    AccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
