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

  accordions = [
    { title: 'What is Relevo Immigrations and what services do you offer?', content: 'Relevo Immigrations specializes in facilitating visa applications for various European countries. Our services include providing administrative support for temporary resident categories such as visitor visas, study permits, work permits, and travel document applications to European countries.' },
    { title: 'Who operates the visa application process for European countries through Relevo Immigrations?', content: 'Relevo Immigrations partners with authorized agencies, such as VFS Global, to manage the visa application process for European countries. These private companies are authorized by European immigration authorities to provide visa application services.' },
    { title: 'Can I request an emergency appointment for my visa application to European countries?', content: 'Emergency appointments may be available under specific circumstances, such as the death or critical illness of an immediate family member residing in a European country. Immediate family members include spouses, dependent children, parents, guardians, etc. Proof of emergency, such as a death certificate or medical letter, is required. Please note that  emergency appointments cannot be scheduled online and must be arranged by contacting Relevo Immigrations directly.' },
    { title: ' What documents are required for an emergency biometric appointment?', content: 'For emergency biometric appointments, applicants must provide proof of emergency, such as a death certificate, medical letter, or letter from a funeral home. Failure to present the required proof may impact the application review process by immigration authorities.' },
    { title: ' Does an emergency biometric appointment affect visa processing times or outcomes?', content: 'No, an emergency biometric appointment does not affect visa processing times or outcomes. It is solely for the purpose of collecting biometric data in urgent situations. Visa processing times and outcomes remain subject to standard procedures and criteria set by immigration authorities.' },
    { title: 'How do I schedule an emergency biometric appointment?', content: ' To schedule an emergency biometric appointment, applicants must  contact Relevo Immigrations directly via phone or email.  Emergency appointments cannot be scheduled through the online appointment system.' },
    { title: 'Where can I book a regular appointment for my visa application?', content: 'Regular appointments for visa applications can be booked online through Relevo Immigrations appointment system. Applicants can also contact the Relevo Immigrations Contact Centre for assistance with booking appointments.' },
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
