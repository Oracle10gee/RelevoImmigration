import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingCardComponent } from './sliding-card.component';

describe('SlidingCardComponent', () => {
  let component: SlidingCardComponent;
  let fixture: ComponentFixture<SlidingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
