import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../auth.service';
import 'hammerjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { MessageComponent } from '../message/message.component';
import { HttpService } from '../http.service';
import {DatePipe} from '@angular/common';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.css']
})
export class PageCreateComponent {
  constructor(public authService: AuthService, public modalService: NgbModal, public apiService: HttpService, public datepipe: DatePipe){}
  title: string;
  fundsNeeded: number;
  fundedAmount: number = 0;
  description: string;

  category: string;
  modalOption: NgbModalOptions = {};
  today: object;
  dd: string;
  mm: string;
  yyyy: string;
  myDate: object;
  endDate: string;
  startDate: string;
  page_id: string;
  projects: string;
  approved: string;
  pending: string;
  addPage(){
    const fundedAmount = 0;
    let myDate = new Date();
    this.startDate = this.datepipe.transform(myDate, 'yyyy-LL-dd');
    this.endDate = this.datepipe.transform(myDate.setDate(myDate.getDate()+30), 'yyyy-LL-dd');

  //    this.someDateVar = this.datepipe.transform(myDate, 'dd')
      //this.setDate(this.someDateVar.getDate()+30);
  console.log(this.startDate);
  console.log(this.endDate);
/*     this.today = new Date();
     this.dd = this.today.getDate();
     this.mm = this.today.getMonth()+1;
    const yyyy = this.today.getFullYear();
    if(dd<10) {
    dd = '0'+dd
}

if(mm<10) {
    mm = '0'+mm
}
today = yyyy +"-"+mm+"-"+dd;
console.log(this.today);*/
  const projects = this.numProjects();
  console.log(projects);

    console.log(projects, this.title, this.description, this.fundedAmount, this.fundsNeeded, this.category, this.startDate, this.endDate);
    this.apiService.addNewPage(projects, this.title, this.description, this.fundedAmount, this.fundsNeeded, this.category, this.startDate, this.endDate).subscribe( response => {
      console.log(response);
    });
  }
  projectsize(){
      this.apiService.getprojects().subscribe( response => {
        console.log(response.data.length);
        localStorage.setItem('page_id', response.data.length+1);

      });

    }
    pagestatus(){
      const approved = "no";
      const pending = "no";
      const page_id = this.numProjects();
      const user_id = this.authService.getUserId();
      console.log(page_id, user_id, approved, pending);
      this.apiService.pagestatus(page_id, user_id, approved, pending).subscribe( response => {
        console.log(response);
      });
    }
    numProjects(): any {
      return localStorage.getItem('page_id');
    }
  confirmAction(title, item, task) {
    this.modalOption.backdrop = 'static';
    this.modalOption.keyboard = false;
    const modalRef = this.modalService.open(MessageComponent, this.modalOption);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.task = task;
    modalRef.componentInstance.item = item;

    modalRef.result.then((result) => {
                    // Do something with the result and 'item'
    });
  }

}
