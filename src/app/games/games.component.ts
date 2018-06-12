import { Component, OnInit } from '@angular/core';
import { GAMES } from '../mock-game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games = GAMES;

  constructor() { }

  ngOnInit() {
  }

}
