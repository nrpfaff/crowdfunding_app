import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Account } from '../myTypes';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {
  user_id: Account;
  users: Account[];
  constructor(public authService: AuthService, private apiService: HttpService, public modalService: NgbModal, private route: ActivatedRoute, private router: Router) {
    const user_id = this.authService.getUserId();
    console.log(user_id);
    this.apiService.getAccount(user_id).subscribe( response => {
      console.log(response);
      this.user_id= response.data;
      if (response === 1){
        this.user_id = response.data;
      }
    });
   }
  displayName(){
    const userid = this.authService.getUser();
    console.log(userid);
    return userid;
  }
  displayUsername(){
    const userid = this.authService.getUsername();
    console.log(userid);
    return userid;
  }
  displayPhone(){
    const userid = this.authService.getPhone();
    console.log(userid);
    return userid;
  }
  displayEmail(){
    const userid = this.authService.getEmail();
    console.log(userid);
    return userid;
  }
  displayUserId(){
    const userid = this.authService.getUserId();
    console.log(userid);
    return userid;
  }

  updateInformation(){

  }
  ngOnInit() {
  }

}
