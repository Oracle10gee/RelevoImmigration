import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  // login
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token', 'true');

        if (res.user?.emailVerified == true) {
          this.router.navigate(['dashboard']);
        } else {
          this.router.navigate(['/verify-email']);
        }
      },
      (err) => {
        this.showAlert('Error', err.message, 'error');
        this.router.navigate(['/login']);
      }
    );
  }

  // register
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        this.showAlert('Success', 'Registration Successful', 'success');
        this.router.navigate(['/login']);
        this.emailVerification();
      },
      (err) => {
        this.showAlert('Error', err.message, 'error');
        this.router.navigate(['/register']);
      }
    );
  }

  // logout
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        this.showAlert('Error', err.message, 'error');
      }
    );
  }

  // forgotPassword
  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(
      () => {
        this.showAlert('Success', 'Password reset email sent', 'success');
        this.router.navigate(['/verify-email']);
      },
      (err) => {
        this.showAlert('Error', err.message, 'error');
      }
    );
  }

  // email verification
  async emailVerification() {
    try {
      const user = await this.fireauth.currentUser;

      if (user) {
        await user.sendEmailVerification();
        this.router.navigate(['/verify-email']);
        this.showAlert('Success', 'Verification email sent', 'success');
      } else {
        console.error('No user found');
      }
    } catch (error) {
      // Handle error
      console.error('Error sending verification email', error);
      this.showAlert('Error', 'Error sending verification email', 'error');
    }
  }

  // google sign in
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(
      (res) => {
        this.router.navigate(['/dashboard']);
        localStorage.setItem('token', JSON.stringify(res.user?.uid));
      },
      (err) => {
        this.showAlert('Error', err.message, 'error');
      }
    );
  }

  // generic function to show SweetAlert
  showAlert(title: string, text: string, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  }
}
