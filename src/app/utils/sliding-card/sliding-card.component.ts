import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sliding-card',
  templateUrl: './sliding-card.component.html',
  styleUrls: ['./sliding-card.component.css']
})
export class SlidingCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
}
