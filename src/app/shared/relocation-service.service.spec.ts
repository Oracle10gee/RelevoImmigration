import { TestBed } from '@angular/core/testing';

import { RelocationServiceService } from './relocation-service.service';

describe('RelocationServiceService', () => {
  let service: RelocationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelocationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
