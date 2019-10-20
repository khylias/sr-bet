import { Component, OnInit, Input } from '@angular/core';

import { Player } from './../../models';
import { CheckoutService } from './../../services';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent implements OnInit {
  @Input() public player: Player;

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
  }

  public addToBasket(bet): void {
    this.checkoutService.addToCheckout(bet);
  }

}
