import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { RelocationService } from 'src/app/shared/relocation-service.service';
import { DatePipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { slideInAnimation } from '../../../animations/card.animations';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css'],
  providers: [DatePipe], // Add DatePipe to the providers array
  animations: [slideInAnimation]
})
export class DashboardHomeComponent implements OnInit, OnDestroy {
  itemsPerSlide = 3;
  @Input() cards = [
    { title: 'Germany', description: 'Entdecken Sie die perfekte Mischung aus Moderne und Geschichte in Deutschland, wo lebhafte Städte neben märchenhaften Landschaften und faszinierender Kultur existieren.', imageFlag: "", image: 'assets/germany.jpg' },
    { title: 'Spain', description: 'Emprende un viaje a España, donde playas doradas, ritmos apasionados de flamenco y maravillas arquitectónicas te esperan en cada esquina.', imageFlag: "", image: 'assets/spain.jpg' },
    { title: 'Switzerland', description: 'Erleben Sie die atemberaubende Schönheit der Schweiz mit ihren majestätischen Alpen, unberührten Seen und charmanten Dörfern, die im Herzen Europas eingebettet sind.', imageFlag: "", image: 'assets/switzerland.jpg' },
    { title: 'France', description: `Laissez-vous séduire par le romantisme et l'élégance de la France, où des monuments emblématiques, une cuisine exquise et des trésors artistiques créent une toile inoubliable d'expériences.`, imageFlag: "", image: 'assets/france.jpg' },
    { title: 'Sweden', description: `Fördjupa dig i den fridfulla skönheten i Sverige, där pittoreska landskap, innovativ design och ett rikt kulturarv lockar till att utforskas.`, imageFlag: "", image: 'assets/sweden.jpg' },
    { title: 'Italy', description: `Assapora la dolce vita in Italia, dove antiche rovine, arte rinascimentale e una cucina deliziosa convergono in una celebrazione senza tempo della bella vita.`, imageFlag: "", image: 'assets/italy.jpg' },
    {
      title: 'Belgium', description: `
    Enjoy de charme van België, waar middeleeuwse steden, wereldberoemde chocolade en smaakvolle bieren wachten om uw zintuigen te betoveren.`, imageFlag: "", image: 'assets/belgium.jpg'
    },
    { title: 'Netherlands', description: `Begin een reis door Nederland, waar levendige tulpenvelden, pittoreske windmolens en iconische steden langs grachten een perfect landschap schilderen.`, imageFlag: "", image: 'assets/dutch.jpg' },
  ];

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
    private fireauth: AngularFireAuth,
    private router: Router,
  ) { }

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

  openRoute() {
    this.router.navigate(['/dashboard/start-application'])
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
