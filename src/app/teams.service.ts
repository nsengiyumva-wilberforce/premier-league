import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  seasonUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getSeason(): any{
    return this.http.get(this.seasonUrl + '/2018-19');
  }

}
