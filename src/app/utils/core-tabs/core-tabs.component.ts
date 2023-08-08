import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../../@components/admin-dashboard/dashboard-home/modal-content/modal-content.component';

@Component({
  selector: 'app-core-tabs',
  templateUrl: './core-tabs.component.html',
  styleUrls: ['./core-tabs.component.css']
})
export class CoreTabsComponent {
  coreActiveTab: string = 'coreTab1';

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
