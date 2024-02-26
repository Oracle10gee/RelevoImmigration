import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-help-desk-modal',
  templateUrl: './help-desk-modal.component.html',
  styleUrls: ['./help-desk-modal.component.css']
})
export class HelpDeskModalComponent {

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.dismiss();
  }

}
