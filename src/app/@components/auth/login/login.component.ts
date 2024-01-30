import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  passwordVisible: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  login() {
    if (this.email == '') {
      this.showAlert('Error','please enter email', 'Error');
      return;
    }

    if (this.password == '') {
      this.showAlert('Error','please enter password','Error');
      return;
    }

    this.auth.login(this.email, this.password);
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  signInWithGoogle() {
    this.auth.googleSignIn();
  }

  showAlert(title: string, text: string, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  }
}
