import { TestBed } from '@angular/core/testing';

import { ProjeectServiceService } from './projeect-service.service';

describe('ProjeectServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjeectServiceService = TestBed.get(ProjeectServiceService);
    expect(service).toBeTruthy();
  });
});
