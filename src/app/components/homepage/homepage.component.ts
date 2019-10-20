import { Match } from './../../models/match';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { PlayerService, MatchService } from './../../services';
import { Player } from './../../models';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  private subs: Subscription = new Subscription();

  public topPlayer: Player;
  public players: Player[] = [];
  public matches: Match[] = [];

  constructor(private playerService: PlayerService, private matchService: MatchService) { }

  ngOnInit() {
    this.getPlayers();
    this.getMatchs();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getPlayers(): void {
    this.subs.add(
      this.playerService.getPlayers().subscribe(res => {
        this.players = res;
        this.topPlayer = res.reduce((prev, current) => {
          return prev.rate > current.rate ? prev : current;
        });
      })
    );
  }

  private getMatchs(): void {
    this.subs.add(this.matchService.getMatches().subscribe(res => this.matches = res));
  }

}
