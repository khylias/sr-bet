import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { environment } from './../../environments/environment';
import { Match } from '../models/match';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService extends ApiService {

  public getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(environment.hostApi + '/matches');
  }
}
