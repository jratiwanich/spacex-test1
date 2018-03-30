import { TestBed, inject } from '@angular/core/testing';

import { SpcxRestService } from './spcx-rest.service';

describe('SpcxRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpcxRestService]
    });
  });

  it('should be created', inject([SpcxRestService], (service: SpcxRestService) => {
    expect(service).toBeTruthy();
  }));
});
