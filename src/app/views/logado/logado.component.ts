import { Component, OnInit } from '@angular/core';
import { ListGames } from 'src/app/models/list-games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-logado',
  templateUrl: './logado.component.html',
  styleUrls: ['./logado.component.css'],
})
export class LogadoComponent implements OnInit {
  listGames: ListGames;

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    this.getListGames();
  }

  getListGames() {
    this.gameService.getListGames().subscribe((listGames: ListGames) => {
      this.listGames = listGames;
    });
  }
}
