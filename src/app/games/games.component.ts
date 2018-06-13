import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameDataService) { }

  ngOnInit() {
      this.getGames();
  }

  getGames() : void {
    this.games = this.gameService.getGames();
  }

}
