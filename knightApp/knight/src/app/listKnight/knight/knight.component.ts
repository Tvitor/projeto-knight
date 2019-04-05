
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
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.css']
})


export class KnightComponent implements OnInit {
  list

  searchText





  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    let urlList = 'http://localhost:5000/knight'
    this.http.get(urlList).subscribe(resp => {
      this.list = resp

    })

  }





}
