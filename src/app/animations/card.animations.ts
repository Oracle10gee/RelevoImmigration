import { trigger, transition, style, animate } from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-out', style({ transform: 'translateX(0%)' })),
    ]),
    transition(':leave', [
        animate('1s ease-out', style({ transform: 'translateX(-100%)' })),
    ]),
]);
