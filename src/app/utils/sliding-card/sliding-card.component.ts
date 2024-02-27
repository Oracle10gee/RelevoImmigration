import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sliding-card',
  templateUrl: './sliding-card.component.html',
  styleUrls: ['./sliding-card.component.css']
})
export class SlidingCardComponent {
  @Input()
  image!: string;
  @Input()
  altText!: string;
  @Input()
  title!: string;
  @Input()
  content!: string;
}
