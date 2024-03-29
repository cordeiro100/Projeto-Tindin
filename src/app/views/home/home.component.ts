import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Games } from 'src/app/models/games';
import { ListGames } from 'src/app/models/list-games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listGames: ListGames;
  pesquisaForm: FormGroup;
  search: string;

  constructor(private gameService: GamesService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.pesquisaForm = this.formBuilder.group({
      search: ['', [Validators.required]]
    })


    this.getListGames();
  }

  getListGames() {
    this.gameService.getListGames().subscribe((listGames: ListGames) => {
      this.listGames = listGames;
    });
  }
getListByTerm(){
  this.gameService.getListByTerm(this.search).subscribe((listGames: ListGames) => {
    this.listGames = listGames;
  });
}

}
