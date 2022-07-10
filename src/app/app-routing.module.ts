import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameInformationComponent } from './views/game-information/game-information.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "gameInformation", component: GameInformationComponent},
  { path: "gameInformation/:id", component: GameInformationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
