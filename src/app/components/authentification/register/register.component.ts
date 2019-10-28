import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';

import { passwordMatchValidator } from 'src/app/validators';
import { UserService } from 'src/app/services';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private subs: Subscription = new Subscription();
  public form: FormGroup;
  public submitted = false;


  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  public getfieldsErrors(field: string): ValidationErrors {
    return this.form.get(field).errors;
  }

  private initForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: [''],
      lastName: ['']
    }, { validators: passwordMatchValidator() });
  }

  public register(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.subs.add(this.userService.register(this.form.value).subscribe(res => {
      console.log(res);
    }));
  }

}
