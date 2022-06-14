import { TestBed } from '@angular/core/testing';

import { RidesregistryService } from './ridesregistry.service';

describe('RidesregistryService', () => {
  let service: RidesregistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RidesregistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
