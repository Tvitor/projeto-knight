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
  selector: 'app-hallof-heroes',
  templateUrl: './hallof-heroes.component.html',
  styleUrls: ['./hallof-heroes.component.css']
})
export class HallofHeroesComponent implements OnInit {
  list: any

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    let urlList = 'http://localhost:5000/knight'
    this.http.get(urlList).subscribe(resp => {
      this.list = resp

    })
  }

}
