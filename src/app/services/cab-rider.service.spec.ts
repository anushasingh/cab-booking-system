import { TestBed } from '@angular/core/testing';

import { CabRiderService } from './cab-rider.service';

describe('CabRiderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CabRiderService = TestBed.get(CabRiderService);
    expect(service).toBeTruthy();
  });
});
