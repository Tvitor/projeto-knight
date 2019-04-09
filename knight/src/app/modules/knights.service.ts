//Get Knights

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Knight } from './knight';
@Injectable({
  providedIn: 'root'
})
export class KnightsService {

private readonly API = 'http://localhost:5000/knight'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Knight[]>(this.API)
  }

  create(knight) {
    return this.http.post(this.API, knight)
  }
}
