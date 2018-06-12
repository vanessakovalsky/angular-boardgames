import { Component, OnInit } from '@angular/core';
import { GAMES } from '../mock-game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games = GAMES;

  constructor() { }

  ngOnInit() {
  }

}
