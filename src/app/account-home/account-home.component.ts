import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
