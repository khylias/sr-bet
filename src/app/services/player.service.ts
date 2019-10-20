import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { ApiService } from './api.service';
import { Player } from './../models';

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlayerService extends ApiService {

  public getPlayers(): Observable<Player[]> {
    return of<Player[]>([
      {
        id: 1,
        lastname: 'LUINI',
        firstname: 'Antonio',
        rate: 1.95,
        createdAt: '2019-10-07T15:47:18.399Z',
        updatedAt: '2019-10-07T20:21:44.947Z',
        profil: null
      }
    ]);
    return this.http.get<Player[]>(environment.hostApi + '/players');
  }
}
