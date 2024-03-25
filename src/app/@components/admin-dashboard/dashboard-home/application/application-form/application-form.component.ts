import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent {
  constructor(private router: Router) { };

  formData: any = {};
  onSubmit(): void {

    emailjs.send('service_6iep5ur', 'template_m6wup6b', {
      
      fullName: this.formData.fullName,
      email: this.formData.email,
      gender: this.formData.gender,
      phone: this.formData.phone,
      nationality: this.formData.nationality,
      dob: this.formData.dob,
      address: this.formData.address,

    
    }, '2oNAao9sy3wnuAeCv')
      .then((response: EmailJSResponseStatus) => {
        console.log('Email sent successfully:', response);
      }, (error) => {
        console.error('Error sending email:', error);
      });

    console.log("form submitted successfully")
    console.log(this.formData);
  
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
