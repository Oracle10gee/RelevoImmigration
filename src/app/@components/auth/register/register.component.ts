import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { slideInAnimation } from '../../../animations/card.animations';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [slideInAnimation]
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  passwordVisible: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit() { }

  register() {
    if (this.email == '') {
      alert('please enter email');
      return;
    }

    if (this.password == '') {
      alert('please enter password');
      return;
    }

    this.auth.register(this.email, this.password);
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }
}
