import { TestBed } from '@angular/core/testing';

import { LeadOperationService } from './lead-operation.service';

describe('LeadOperationDTOService', () => {
  let service: LeadOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
