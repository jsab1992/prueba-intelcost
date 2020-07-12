import { TestBed } from '@angular/core/testing';

import { ApiPixabayService } from './api-pixabay.service';

describe('ApiPixabayService', () => {
  let service: ApiPixabayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPixabayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
