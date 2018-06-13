import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GAMES } from '../mock-game';
//import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games = GAMES;

  constructor() { }
  
  ngOnInit() {
    //  this.getGames();
  }

  getGames() {
   // this.games = this.gameService.getGames();
  }

}
