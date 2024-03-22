import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { slideInAnimation } from '../../../animations/card.animations';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  animations: [slideInAnimation]
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  forgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
}
