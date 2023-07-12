import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css'],
})
export class ModalContentComponent {
  
  currentContent = 0;

  constructor(public activeModal: NgbActiveModal) {}

  showNextContent() {
    this.currentContent++;
  }

  showPreviousContent() {
    this.currentContent--;
  }

  closeModal() {
    this.activeModal.dismiss();
  }

  onOtpChange(otp: string): void {
    console.log('OTP:', otp);
    // Perform the desired action with the OTP value
  }
}
