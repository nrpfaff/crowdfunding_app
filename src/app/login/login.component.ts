import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;
  result = false;
  constructor(public authService: AuthService, public router: Router) {}

  login(username: string, password: string) {
    this.message = '';
    console.log()
    this.authService.login(username, password).subscribe(data => {
      console.log(data);
      if (!data) {
        this.message = 'Incorrect credentials.';
        setTimeout(function() {this.message = '';}.bind(this), 2500);}
        else{
          this.router.navigate(['home']);
        }
    });
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}

