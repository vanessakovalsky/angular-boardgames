import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { AddGameComponent } from './add-game/add-game.component';
import { TextColorDirective } from './text-color.directive';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameDetailComponent,
    AddGameComponent,
    TextColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
