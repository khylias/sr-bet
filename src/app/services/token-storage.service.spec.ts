import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageService } from '@rars/ngx-webstorage';
import { JwthelperService } from './../helpers/jwthelper.service';
import { TokenStorageService } from './token-storage.service';

describe('TokenStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocalStorageService,
        JwthelperService,
        TokenStorageService
      ]
    });
  });

  it('should be created', inject([TokenStorageService], (service: TokenStorageService) => {
    expect(service).toBeTruthy();
  }));
});
