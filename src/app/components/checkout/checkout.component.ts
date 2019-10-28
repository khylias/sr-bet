import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

import { CheckoutService } from './../../services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public form: FormGroup;

  constructor(private checkoutService: CheckoutService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    console.log(this.getCheckoutList);
    this.getCheckoutList.forEach(item => this.setBetForm(item));
  }

  public get bets(): FormArray {
    return this.form.get('bets') as FormArray;
  }

  public get getCheckoutList() {
    return this.checkoutService.checkoutList;
  }

  public back(): void {
    history.back();
  }

  private initForm(): void {
    this.form = this.fb.group({
      bets: this.fb.array([], Validators.required)
    });
  }

  private setBetForm(bet): void {
    this.bets.push(this.fb.group({
      id: [bet.id, Validators.required],
      bet: [{ value: bet.bet, disabled: true }, Validators.required],
      amount: ['', Validators.compose([Validators.required, Validators.min(1)])]
    }));
  }

  public submit(): void {
    console.log('submitted');
  }

}
