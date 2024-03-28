import { TestBed } from '@angular/core/testing';

import { WineCellarService } from './wine-cellar.service';

describe('WineCellarService', () => {
  let service: WineCellarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WineCellarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
