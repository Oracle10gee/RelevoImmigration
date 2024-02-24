import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent {
  slides = [
    { title: 'Fill the Visa Application form', image: 'assets/fillform.svg', altText: 'slide 1' },
    { title: 'Complete the documents file', image: 'assets/fileUpload.svg', altText: 'slide 2' },
    { title: 'Request an appointment', image: 'assets/meetingIcon.svg', altText: 'slide 3' },
    { title: 'Show up at the appointment', image: 'assets/showUpmeeting.svg', altText: 'slide 4' },
    { title: 'Provide Signature', image: 'assets/fingerSign.svg', altText: 'slide 5' },
    { title: 'Verify the documents', image: 'assets/doneCheck.svg', altText: 'slide 6' },
    { title: 'Pay the visa fees', image: 'assets/paymentStripe.svg', altText: 'slide 7' },
  ]


  formData: any = {};
  onSubmit(): void {
    // Process form data here
    // Display SweetAlert notification
    Swal.fire({
      icon: 'success',
      // title: 'Appointment Requested',
      text: 'Your message has been sent. Thank you!',
      timer: 12000, // Automatically close after 3 seconds
      timerProgressBar: true,
      showConfirmButton: false,
    });
    // this.router.navigate(['/dashboard/start-application']);
  }
}
