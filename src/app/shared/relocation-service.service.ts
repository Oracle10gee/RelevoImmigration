// relocation.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RelocationService {
  private relocationProgressSubject = new BehaviorSubject<number>(0);

  getRelocationProgress(): Observable<number> {
    // Assume you get relocation progress from an API or some data source
    // For demonstration purposes, we'll update it every second
    setInterval(() => {
      const newProgress = Math.floor(Math.random() * 100); // Generate random progress for demo
      this.relocationProgressSubject.next(newProgress);
    }, 1000);

    return this.relocationProgressSubject.asObservable();
  }

  private upcomingEventsData: { name: string, date: Date }[] = [
    { name: 'Orientation Webinar', date: new Date('2022-03-15T14:00:00') },
    { name: 'Document Verification Session', date: new Date('2022-03-20T10:30:00') },
    { name: 'Flight Booking Assistance', date: new Date('2022-03-25T09:00:00') },
  ];

  getUpcomingEvents(): Observable<{ name: string, date: Date }[]> {
    // Simulate fetching upcoming events from a data source (e.g., API)
    return new Observable(observer => {
      // Simulate an asynchronous API call
      setTimeout(() => {
        observer.next(this.upcomingEventsData);
        observer.complete();
      }, 1000); // Simulate a delay of 1 second
    });
  }
}
