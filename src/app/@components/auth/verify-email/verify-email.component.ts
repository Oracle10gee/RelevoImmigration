import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from '../../../animations/card.animations';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
  animations: [slideInAnimation]
})
export class VerifyEmailComponent implements OnInit {
  remainingTime = 7000; // 7000 milliseconds (7 seconds)

  constructor(private router: Router) {}

  ngOnInit(): void {
   // Update the remaining time every second
   const intervalId = setInterval(() => {
    this.remainingTime -= 1000; // Subtract 1000 milliseconds (1 second)
    if (this.remainingTime <= 0) {
      clearInterval(intervalId); // Stop the interval when time is up
      this.router.navigate(['/login']);
    }
  }, 1000);
  }
}
