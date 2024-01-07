import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutTestComponent } from './checkout-test.component';

describe('CheckoutTestComponent', () => {
  let component: CheckoutTestComponent;
  let fixture: ComponentFixture<CheckoutTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
