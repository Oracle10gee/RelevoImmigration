import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent {
  constructor(private router: Router) {};

  formData: any = {};
  onSubmit(): void {
    // Process form data here
    // Display SweetAlert notification
    Swal.fire({
      icon: 'success',
      title: 'Application Successful',
      text: 'Your application has been submitted.',
      timer: 3000, // Automatically close after 3 seconds
      timerProgressBar: true,
      showConfirmButton: false
    });
    this.router.navigate(['/dashboard/start-application/upload-documents'])
  }
}
