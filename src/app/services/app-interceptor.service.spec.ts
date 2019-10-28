import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppInterceptorService } from './app-interceptor.service';
import { TokenStorageService } from './token-storage.service';
import { JwthelperService } from './../helpers';

import { LocalStorageService } from '@rars/ngx-webstorage';
describe('AppInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AppInterceptorService,
        TokenStorageService,
        LocalStorageService,
        JwthelperService
      ]
    });
  });

  it('should be created', inject([AppInterceptorService], (service: AppInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
