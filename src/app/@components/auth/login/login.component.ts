import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  password: string = '';
  passwordVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    // Initialize the loginForm with form controls and validators
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.errorMessage = '';

    const loginData = this.loginForm.value;
    // this.http.post<any>('http://3.132.2.123:8088/api/v1/f1core-service/Auth/Login', loginData)
    //   .subscribe(
    //     (response) => {
    //       console.log('Login successful!', response);

    //       localStorage.setItem('access_token', response.token);
    //       this.router.navigate(['/dashboard']);
    //     },
    //     (error) => {
    //       console.error('Login failed!', error);
    //       this.errorMessage = 'Invalid username or password.';
    //     }
    //   );
  }
}
