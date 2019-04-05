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
  list
  arms

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    let urlList = 'http://localhost:5000/knight'
    this.http.get(urlList).subscribe(resp => {
      this.list = resp
      this.arms = resp

    })

  }





}
