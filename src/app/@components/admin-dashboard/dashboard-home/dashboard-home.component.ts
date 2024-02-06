import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { RelocationService } from 'src/app/shared/relocation-service.service';
import { DatePipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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

  progressValue = 15; // Start at 30% progress
  daysRemaining = Math.round(((100 - this.progressValue) / 100) * 365); // Calculate initial days remaining

  userDisplayName: string | null = null; // variable to store the user's display name

  private subscription: Subscription | undefined;

  constructor(
    private modalService: NgbModal,
    private relocationService: RelocationService,
    private datePipe: DatePipe,
    private fireauth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.fireauth.authState.subscribe((user) => {
      if (user) {
        // User is signed in
        this.userDisplayName = user.displayName || user.email || 'User'; // Use displayName if available, otherwise use email, or default to 'User'
      } else {
        // User is signed out
        this.userDisplayName = null;
      }
    });

    setInterval(() => {
      this.daysRemaining--;
      this.progressValue = ((365 - this.daysRemaining) / 365) * 100;

      if (this.daysRemaining <= 0) {
        // Reset after 365 days
        this.daysRemaining = 365;
        this.progressValue = 30; // Reset progress to 30%
      }
    }, 86400000); // Update every 24 hours (86400000 milliseconds)

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
    this.currentDateTime =
      this.datePipe.transform(europeanDateTime, 'full') || '';
  }

  private getEuropeanDateTime(): Date {
    const europeTimezone = 'Europe/Paris'; // Change to your desired European timezone
    const utcDateTime = new Date().toLocaleString('en-US', {
      timeZone: europeTimezone,
    });
    return utcDateTime ? new Date(utcDateTime) : new Date();
  }
}
