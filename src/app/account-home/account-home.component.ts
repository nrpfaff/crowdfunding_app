import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpService } from '../http.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import 'rxjs/add/operator/map';
import { Account, Project } from '../myTypes';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmUpdateComponent } from '../confirm-update/confirm-update.component';
import { ConfirmEditComponent } from '../confirm-edit/confirm-edit.component';
import { ApprovalComponent } from '../approval/approval.component';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {
 account: Account;
 project: Project;
  member: string;
  accounts: Account;
  modalOption: NgbModalOptions = {};
  Projvisible: boolean = false;
  Membervisible: boolean  = false;
  user_id: string;
  approved: string;
  processing: string;
  pendVis: boolean = false;
  admin: boolean = false;
  constructor(public authService: AuthService, private apiService: HttpService, public modalService: NgbModal, private route: ActivatedRoute, private router: Router) {
  }
getMemberInfo(){
    this.Projvisible = false;
    this.Membervisible = true;
    this.pendVis = false;
     const member = this.authService.getUserId();
    console.log(member);
    this.apiService.userInfo(member).subscribe( response => {
      console.log(response);
      if (response.status === 1){
        this.account = response.data;
        console.log(this.account);

      }
    });
}

getProjectInfo(){
  this.Projvisible = true;
  this.Membervisible = false;
  this.pendVis = false;
  const member = this.authService.getUserId();
 console.log(member);
 this.apiService.getProjectInfo(member).subscribe( response => {
   console.log(response);
   if (response.status === 1){
     this.project = response.data;
     console.log(this.project);

   }
 });
}

onSubmit(){
  console.log(this.account);
  this.modalOption.backdrop = 'static';
  this.modalOption.keyboard = false;
  const user_id = this.authService.getUserId();
  console.log(user_id);
  const modalRef = this.modalService.open(ConfirmUpdateComponent, this.modalOption);
  modalRef.componentInstance.title = 'Update Account Information';
  modalRef.componentInstance.username = this.account.username;
  modalRef.componentInstance.first_name = this.account.first_name;
  modalRef.componentInstance.last_name = this.account.last_name;
  modalRef.componentInstance.phone = this.account.phone;
  modalRef.componentInstance.email = this.account.email;

  modalRef.result.then((result) => {
    console.log(result);
    if (+result == 1) {


      /* Update course information and route to 'course' page */
      this.apiService.updateAccount(user_id, this.account.first_name, this.account.last_name, this.account.username, this.account.phone, this.account.email).subscribe( response => {
        console.log(response);

      });
    }
     // Close the modal without performing any action.
  });
}
onSubmit2(index){
  console.log(this.project);
  this.modalOption.backdrop = 'static';
  this.modalOption.keyboard = false;
  const page_id = index.page_id;
  const user_id = this.authService.getUserId();
  console.log(this.project[index].page_id);
  console.log(user_id, this.project.title, this.project.description, this.project.funds_needed, this.project.category);
  const modalRef = this.modalService.open(ConfirmEditComponent, this.modalOption);
  modalRef.componentInstance.title = 'Update Project Information';
  modalRef.componentInstance.title = this.project.title;
  modalRef.componentInstance.description = this.project.description;
  modalRef.componentInstance.category = this.project.category;
  modalRef.componentInstance.funds_needed = this.project.funds_needed;

  modalRef.result.then((result) => {
    console.log(result);
    if (+result == 1) {
      console.log(result);
      /* Update course information and route to 'course' page */
     this.apiService.updateProject( this.project[index].page_id, this.project.title, this.project.description, this.project.funds_needed, this.project.category).subscribe( response => {
        console.log(response);

      });
    }
     // Close the modal without performing any action.
  });
}
pendingProjects(){

  this.Projvisible = false;
  this.Membervisible = false;
  this.pendVis = true;
 this.apiService.pendingproject().subscribe( response => {
   console.log(response);
   if (response.status === 1){
     this.project = response.data;
     console.log(this.project);

   }
 });
}
approve(index){
  console.log(this.project[index].page_id);
  this.modalOption.backdrop = 'static';
  this.modalOption.keyboard = false;
  const owner_id = this.project[index].owner_id;
  console.log(this.project[index].page_id);
  const modalRef = this.modalService.open(ApprovalComponent, this.modalOption);
  modalRef.componentInstance.title = 'Approve Project';
  modalRef.componentInstance.title = this.project[index].title;
  modalRef.componentInstance.description = this.project[index].description;
  modalRef.componentInstance.category = this.project[index].category;
  modalRef.componentInstance.funds_needed = this.project[index].funds_needed;

  modalRef.result.then((result) => {
    console.log(result);
    if (+result == 1) {
      console.log("Hi");
      this.approved = 'yes';
      this.processing = 'no';
      const page_id = this.project[index].page_id;
      const owner_id = this.authService.getUserId();
      console.log(page_id, owner_id, this.approved, this.processing);
      /* Update course information and route to 'course' page */
      this.apiService.approve(page_id, owner_id, this.approved, this.processing).subscribe( response => {
        console.log(response.status);

      });
    } else if (+result === 2){
      const page_id = this.project[index].page_id;
      console.log(page_id);
      this.apiService.deny(page_id).subscribe( response => {
        console.log(response.status);
      });
      this.apiService.deleteData(page_id).subscribe( response => {
        console.log(response.status);
      });
    }
     // Close the modal without performing any action.
  });
}

  ngOnInit() {
    const power = this.authService.getAdmin();
    if (power == "yes"){
      this.admin = true;
      this.pendVis = true;
    }
    }
  }
