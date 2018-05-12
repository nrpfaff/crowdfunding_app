import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { AuthService } from '../auth.service';
import 'hammerjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { MessageComponent } from '../message/message.component';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.css']
})
export class PageCreateComponent {
  constructor(public authService: AuthService, public modalService: NgbModal, public apiService: HttpService){}
  title: string;
  fundsNeeded: number;
  fundedAmount: number;
  description: string;
  category: string;
  approved: boolean = false;
  modalOption: NgbModalOptions = {};

  addPage(){
    console.log(this.category);
    console.log(this.description);
    console.log(this.title);
    console.log(this.fundsNeeded);
    console.log(this.approved);
    const fundedAmount = 0;
    const userId = this.authService.getUserId();
    console.log(userId);
    this.apiService.addNewPage(this.title, this.description, this.fundedAmount, this.fundsNeeded, this.category).subscribe( response => {
      console.log(response);
    });
    /* call this.properties and pass them to http service
    will need to create http method to send data to backend
    backend will need new method in products controller/model to insert values into db for page
    next work on finding pages after a few items have been inserted into the bd. Note: page_id auto incremented in db and fundedAmount==0 @ start
    (all other fileds have a value in thi class)
    */
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