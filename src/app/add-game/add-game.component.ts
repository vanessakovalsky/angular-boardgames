import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  model: Game = new Game();
  showForm = false;

  constructor() { }

  showAdd(){
    if(this.showForm){
      this.showForm = false;
    }
    else {
      this.showForm = true;
    }
  }

  ngOnInit() {
  }

}
