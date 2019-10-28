import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  public login(data: { login: string, password: string }): Observable<any> {
    return this.http.post(environment.hostApi + '/auth/local', data);
  }

  public register(data): Observable<any> {
    return this.http.post(environment.hostApi + '/auth/local/register', data);
  }
}
