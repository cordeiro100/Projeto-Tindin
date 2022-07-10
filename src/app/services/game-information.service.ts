import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameInformationService {


  constructor(private httpClient: HttpClientModule) { }


  getGameInformationById(id: string) {
  
   
  }
}
