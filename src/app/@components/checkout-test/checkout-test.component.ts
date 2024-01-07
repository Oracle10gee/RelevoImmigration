import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Form,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-checkout-test',
  templateUrl: './checkout-test.component.html',
  styleUrls: ['./checkout-test.component.css'],
})
export class CheckoutTestComponent {
  checkOutForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.checkOutForm = formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(5),
          Validators.maxLength(30),
        ],
      ],
      quantity: ['', Validators.required],
      terms: ['', Validators.requiredTrue],
    });
  }

  postData() {
    console.log('entire form value', this.checkOutForm);
    console.log('specific value', this.checkOutForm.value.terms);
  }

  ngOnInit(): void {}
}
