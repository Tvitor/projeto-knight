
//List Knights
import { catchError, switchMap} from 'rxjs/operators';
import { Router} from '@angular/router';
import { KnightsService } from '../modules/knights.service';
import {Knight} from "../modules/knight"
import {Component,OnInit, Input} from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClientModule,HttpClient,HttpHandler,HttpHeaders} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable, of, throwError, pipe} from "rxjs";
import 'rxjs/add/operator/map';
import { forEach } from '@angular/router/src/utils/collection';

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
  atkP:String = 'Attack power' //need calc
  exp:String = 'Exp' //need calc
  attack: Number
  knights: Knight[]
  url ='http://localhost:5000/knight'
  years = new Date()
  all: any
  experience: Number
  aniver
  @Input() newNickName: String

  getExp(exp){
   exp = Math.floor((this.aniver - 7) * Math.pow(22, 1.45))
   this.experience = exp
   return exp
  }

  fixAge(age) {
    this.aniver = age * (-1)
    return age * (-1)
  }

  attr(mod) {
    if (mod > 2){
      return 20
    }

    if (mod === 2){
      return 18
    }

    if (mod === 1){
      return 15
    }

    if (mod === 0){
      return 12
    }

    if (mod === -1){
      return 10
    }

    if (mod === -2){
      return 8
    }
  }
  constructor(private service: KnightsService, private http: HttpClient){}

  ngOnInit() {
       this.service.list()
        .subscribe(data => this.knights = data,
        error => console.log(error, 'not found'))

  }

onEdit(knight){
  console.log(this.newNickName)
    knight.nickname = this.newNickName
    this.http.put(this.url + '/' + knight._id, knight)
      .subscribe((knight) =>{
        console.log('knight:', knight )
      })

}

onDelete(knight) {
  console.log(knight)
    knight.status = true
  console.log(knight)
    this.http.put(this.url + '/' + knight._id, knight)
    .subscribe((knight) =>{
      console.log('knight:', knight )
    })
  }

}
