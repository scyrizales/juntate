import { TestBed, inject } from '@angular/core/testing';

import { CreateAggroupmentService } from './create-aggroupment.service';

describe('CreateAggroupmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateAggroupmentService]
    });
  });

  it('should be created', inject([CreateAggroupmentService], (service: CreateAggroupmentService) => {
    expect(service).toBeTruthy();
  }));
});
