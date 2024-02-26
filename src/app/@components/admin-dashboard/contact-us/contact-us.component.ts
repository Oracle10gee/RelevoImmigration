import { Component } from '@angular/core';
import { EmailService } from 'src/app/shared/email.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  email!: string;
  message!: string;
  customMessage!: string;
  name!: string;


  constructor(private emailService: EmailService) { }

  onSubmit() {
    // Assuming you have other form fields captured in properties
    this.emailService.sendEmail(this.name, this.email, this.message, this.customMessage)
      .then(response => {
        console.log('Email sent successfully:', response);
        // Optionally, display a success message to the user
      })
      .catch(error => {
        console.error('Error sending email:', error);
        // Optionally, display an error message to the user
      });
  }
}
