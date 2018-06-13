import { Injectable } from '@angular/core';
import { Game } from './game';
import { GAMES } from './mock-game';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor() { }

  getGames(): Game[] {
    return GAMES;
  }
}
