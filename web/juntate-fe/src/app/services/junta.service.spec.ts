import { TestBed, inject } from '@angular/core/testing';

import { JuntaService } from './junta.service';

describe('JuntaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JuntaService]
    });
  });

  it('should be created', inject([JuntaService], (service: JuntaService) => {
    expect(service).toBeTruthy();
  }));
});
