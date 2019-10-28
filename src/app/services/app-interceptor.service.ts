import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';


import { TokenStorageService } from './token-storage.service';

import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import * as _ from 'lodash';

@Injectable()
export class AppInterceptorService implements HttpInterceptor {
  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const me = this;

    req = me.buildHeaders(req);

    return next.handle(req).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.tokenStorageService.disconnect();
            this.router.navigate(['/authentification/connexion']);
          }

          return observableThrowError(err);
        }
      })
    );
  }

  private buildHeaders(req: HttpRequest<any>): HttpRequest<any> {
    let newHeaders: HttpHeaders = req.headers;
    const setParams = {};
    newHeaders = newHeaders.set('Content-Type', req.url.includes('jwt/refresh') ? 'application/x-www-form-urlencoded' : 'application/json');


    if (this.tokenStorageService.hasToken('auth_token')) {
      newHeaders = newHeaders.set('Authorization', 'Bearer ' + this.tokenStorageService.getToken('auth_token'));
    }

    return req.clone({ headers: newHeaders, setParams });
  }
}
