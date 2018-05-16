import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Project } from '../myTypes';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects: Project;
  constructor( public authService: AuthService, public apiService: HttpService) { }

trending(){
  this.apiService.trending().subscribe( response=> {
    console.log(response);
    if (response.status === 1) {this.projects = response.data;}
  });
}
  ngOnInit() {
  }

}
