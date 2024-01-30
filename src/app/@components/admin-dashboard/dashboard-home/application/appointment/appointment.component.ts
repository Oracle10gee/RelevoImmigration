import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent {
  constructor(private router: Router) {}

  formData: any = {};
  onSubmit(): void {
    // Process form data here
    // Display SweetAlert notification
    Swal.fire({
      icon: 'success',
      title: 'Appointment Requested',
      text: 'Thank you for requesting an appointment. Request will be granted once verification process is complete.',
      timer: 12000, // Automatically close after 3 seconds
      timerProgressBar: true,
      showConfirmButton: false,
    });
    this.router.navigate(['/dashboard']);
  }
}
