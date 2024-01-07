import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { RelocationService } from 'src/app/shared/relocation-service.service';
import { DatePipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css'],
  providers: [DatePipe], // Add DatePipe to the providers array
})
export class DashboardHomeComponent implements OnInit, OnDestroy {
  relocationProgress: number = 0; // Assume relocation progress is a percentage
  upcomingEvents: { name: string; date: Date }[] = [];
  currentDateTime: string = '';
  totalDays = 365;
  progress: number = 0;
  remainingDays: number = this.totalDays;
  private subscription: Subscription | undefined;

  constructor(
    private modalService: NgbModal,
    private relocationService: RelocationService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    // Assume your service provides a method to get relocation progress
    this.relocationService.getRelocationProgress().subscribe((progress) => {
      this.relocationProgress = progress;
    });

    this.relocationService.getUpcomingEvents().subscribe((events) => {
      this.upcomingEvents = events;
    });

    // Set the initial date
    this.updateDateTime();

    // Update the date every second
    this.subscription = interval(1000).subscribe(() => {
      this.updateDateTime();
    });

    setInterval(() => {
      this.updateProgress();
    }, 24 * 60 * 60 * 1000); 
  }

  ngOnDestroy(): void {
    // Unsubscribe from the interval when the component is destroyed
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

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
  
  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'longDate') || '';
  }

  private updateDateTime(): void {
    const europeanDateTime = this.getEuropeanDateTime();
    this.currentDateTime = this.datePipe.transform(europeanDateTime, 'full') || '';
  }

  private getEuropeanDateTime(): Date {
    const europeTimezone = 'Europe/Paris'; // Change to your desired European timezone
    const utcDateTime = new Date().toLocaleString('en-US', {
      timeZone: europeTimezone,
    });
    return utcDateTime ? new Date(utcDateTime) : new Date();
  }

  updateProgress() {
    if (this.progress < 100) {
      this.progress += 100 / this.totalDays;
      this.remainingDays = Math.round(this.totalDays - this.progress);
    }
  }
}
