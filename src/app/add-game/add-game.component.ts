import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameDataService } from '../game-data.service';


@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  model: Game = new Game();
  showForm = false;

  constructor(private gameService: GameDataService) { }

  showAdd(){
    if(this.showForm){
      this.showForm = false;
    }
    else {
      this.showForm = true;
    }
  }

  addGame(game: Game){
    this.games = this.gameService.addGame()
    .subscribe(games => this.games = games;
  }

  ngOnInit() {
  }

}
