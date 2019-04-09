//List Knights
import { catchError, switchMap} from 'rxjs/operators';
import { Router} from '@angular/router';
import { KnightsService } from '../modules/knights.service';
import {Knight} from "../modules/knight"
import {Component,OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClientModule,HttpClient,HttpHandler,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css'],
  preserveWhitespaces: true
})

export class KnightComponent implements OnInit {

  name:String = 'Name'
  age:String = 'Age'
  weapons:String = 'Weapons'
  attribute:String = 'Attribute'
  knights: Knight[]

  constructor(private service: KnightsService){}

  ngOnInit() {
    this.service.list()
      .subscribe(data => this.knights = data)

  }

  // onEdit(knight) {
  //   let knightToUpdate
  //   let nameHero

  //   this.service.list()
  //     .subscribe(id => this.knights._id = id)
  //     console.log(id)
  // }

}








  // list: any
  // expTot: Number
  // name:String = 'Name'
  // age:String = 'age'
  // weapons:String = 'Weapons'
  // attribute:String = 'attribute'
  // Attr:String = 'Attr'
  // Exp:String = 'Exp'
  // urlList = 'http://localhost:5000/knight'
  // constructor(private http: HttpClient) {

  // }

  // ngOnInit() {

  //   this.http.get(this.urlList).subscribe(resp => {
  //     this.list = resp
  //   })

  // }

  // onSubmit(knight) {
  //   let knightToUpdate
  //   let nameHero


  //   this.http.get(this.urlList + '/' + knight.id).subscribe(x => {
  //     knightToUpdate = x});

  //     knightToUpdate.nameHero = knight.nameHero;

  //   this.http.put(this.urlList + '/' + knight._id, knightToUpdate);
  // }

  // Calcular expriencia
    // calcExp() {
    //   this.expTot = Math.floor((this.birthday - 7)* Math.pow(22,1.45))
    // }

