import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgameComponent } from './views/addgame/addgame.component';
import { GameInformationComponent } from './views/game-information/game-information.component';
import { HomeComponent } from './views/home/home.component';
import { LogadoComponent } from './views/logado/logado.component';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "gameInformation", component: GameInformationComponent},
  { path: "gameInformation/:id", component: GameInformationComponent },
  {path: "logado", component: LogadoComponent },
  {path: "addgame", component: AddgameComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
