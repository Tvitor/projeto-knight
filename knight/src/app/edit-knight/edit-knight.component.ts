import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {
  HttpClientModule,
  HttpClient,
  HttpHandler,
  HttpHeaders
} from '@angular/common/http';

@Component({
  selector: 'app-edit-knight',
  templateUrl: './edit-knight.component.html',
  styleUrls: ['./edit-knight.component.css']
})
export class EditKnightComponent implements OnInit {
  list: any
  expTot: Number
  name:String = 'Name'
  age:String = 'age'
  weapons:String = 'Weapons'
  attribute:String = 'attribute'
  Attr:String = 'Attr'
  Exp:String = 'Exp'
  urlList = 'http://localhost:5000/knight'

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

    this.http.get(this.urlList).subscribe(resp => {
      this.list = resp
    })

  }


  onSubmit(knight) {
    let knightToUpdate
    let nameHero


    this.http.get(this.urlList + '/' + knight.id).subscribe(x => {
      knightToUpdate = x});

      knightToUpdate.this.oldNickName = knight.nameHero;

    this.http.put(this.urlList + '/' + knight._id, knightToUpdate);
  }


}
