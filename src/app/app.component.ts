import { CheckoutService } from './services/checkout.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private checkoutService: CheckoutService) {

  }

  public getCheckoutButtonClass(): string {
    return this.checkoutService.checkoutList.length ? 'btn--add-checkout--show' : 'btn--add-checkout--hide';
  }
}
