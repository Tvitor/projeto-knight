import {
  NgForm
} from '@angular/forms';

import {
  Component,
  OnInit
} from '@angular/core';
import {
  Injectable
} from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHandler,
  HttpHeaders
} from '@angular/common/http';


@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css']
})

export class KnightComponent implements OnInit {
  list: any

  name:String = 'Name'
  age:String = 'age'
  weapons:String = 'Weapons'
  attribute:String = 'attribute'
  Attr:String = 'Attr'
  Exp:String = 'Exp'
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    let urlList = 'http://localhost:5000/knight'
    this.http.get(urlList).subscribe(resp => {
      this.list = resp

    })

  }

}
