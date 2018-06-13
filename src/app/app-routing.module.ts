import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { AddGameComponent } from './add-game/add-game.component'

const routes: Routes = [
  { path: 'games', component: GamesComponent},
  { path: 'addGame', component: AddGameComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
