import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListGames } from '../models/list-games';
import { Game } from '../models/game';
@Injectable({
  providedIn: 'root',
})
export class GamesService {
  url = 'https://api-labs.tindin.com.br/games';

  constructor(private httpClient: HttpClient) {}

  getListGames(): Observable<ListGames> {
    return this.httpClient.get<ListGames>(this.url);
  }

  public getGameById(_id: string): Observable<any> {
    return this.httpClient.get(this.url + '/' + _id);
  }

  public getListByTerm(term: string): Observable<ListGames> {
    return this.httpClient.get<ListGames>(this.url + '?title=' + term );
  }
}
