import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css'],
})
export class DashboardHomeComponent {
  constructor(private modalService: NgbModal) {}

  isBalanceHidden = true;

  toggleBalance(): void {
    this.isBalanceHidden = !this.isBalanceHidden;
  }

  openModal() {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      size: 'md', // Set the size of the modal (e.g., 'lg', 'sm')
    };

    const modalRef = this.modalService.open(
      ModalContentComponent,
      modalOptions
    );
  }
}
