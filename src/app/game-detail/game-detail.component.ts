import { Component, OnInit } from '@angular/core';
import { Game } from '../game';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

game: Game = {
  name: 'Test',
  editor: 'Asmodée',
  year_published: '2012',
  description: 'Good game for all',
  category: 'expert',
  time: '120 min',
  number_player: '2-5'
}

  constructor() { }

  ngOnInit() {
  }

}
