import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public checkoutList = [];

  constructor() { }

  public addToCheckout(bet): void {
    this.checkoutList.push(bet);
  }
}
