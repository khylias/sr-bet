import { Component, OnInit } from '@angular/core';

import { CheckoutService } from './../../services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
  }

  public get getCheckoutList() {
    return this.checkoutService.checkoutList;
  }

  public back(): void {
    history.back();
  }

}
