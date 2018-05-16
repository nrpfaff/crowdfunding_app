import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-page-data',
  templateUrl: './page-data.component.html',
  styleUrls: ['./page-data.component.css']
})
export class PageDataComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
