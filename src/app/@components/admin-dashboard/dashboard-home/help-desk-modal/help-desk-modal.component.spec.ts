import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDeskModalComponent } from './help-desk-modal.component';

describe('HelpDeskModalComponent', () => {
  let component: HelpDeskModalComponent;
  let fixture: ComponentFixture<HelpDeskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpDeskModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDeskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
