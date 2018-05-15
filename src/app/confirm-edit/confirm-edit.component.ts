import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-confirm-edit',
  templateUrl: './confirm-edit.component.html',
  styleUrls: ['./confirm-edit.component.css']
})
export class ConfirmEditComponent implements OnInit {

  constructor(public modalService: NgbActiveModal) { }

  ngOnInit() {
  }

}
