import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-page-donate',
  templateUrl: './page-donate.component.html',
  styleUrls: ['./page-donate.component.css']
})
export class PageDonateComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
