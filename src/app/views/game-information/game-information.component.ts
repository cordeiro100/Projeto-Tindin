import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/game';
import { ListGames } from 'src/app/models/list-games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.css'],
})
export class GameInformationComponent implements OnInit {
  @Input() id: string;
  game: Game;
  search: string;
  listGames: ListGames;
  pesquisaForm: FormGroup;

  constructor(
    private gameService: GamesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder

  ) {}

  ngOnInit(): void {
    this.pesquisaForm = this.formBuilder.group({
      search: ['', [Validators.required]]
    })

    this.id = this.route.snapshot.params['id'];

    this.getGame()
  }

  getGame() {
    this.gameService.getGameById(this.id).subscribe((res) => {
      this.game = res.game;
    });
  }
  getListByTerm(){
    this.gameService.getListByTerm(this.search).subscribe((listGames: ListGames) => {
      this.listGames = listGames;
    });
  }
}
