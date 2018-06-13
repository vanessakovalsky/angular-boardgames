import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Game } from './game';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  private gamesUrl = "http://virtserver.swaggerhub.com/vanessakovalsky/BoardGames/1.0.0/pet/0";

  constructor( private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl)
      .pipe(
        tap(games => console.log('fetched heros')),
      );
  }

  addGame (game: Game): Observable<Game> {
    return this.http.post<Game>(this.gamesUrl, game, httpOptions).pipe(
      tap(games => console.log('fetched heros')),
      catchError(console.log('error'));
    )
  }
}
