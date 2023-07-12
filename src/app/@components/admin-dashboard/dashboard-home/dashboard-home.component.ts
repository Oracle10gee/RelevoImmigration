import { Component } from '@angular/core';
import {
  NgbModal,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css'],
})
export class DashboardHomeComponent {
  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static', // Set backdrop option to 'static' to prevent closing on outside click
      keyboard: false, // Disable keyboard interactions
      size: 'md', // Set the size of the modal (e.g., 'lg', 'sm')
    };

    const modalRef = this.modalService.open(
      ModalContentComponent,
      modalOptions
    );
  }
}
