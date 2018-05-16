import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-confirm-update',
  templateUrl: './confirm-update.component.html',
  styleUrls: ['./confirm-update.component.css']
})
export class ConfirmUpdateComponent implements OnInit {
  title: string;
  username: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  constructor(public modalService: NgbActiveModal) { }

  ngOnInit() {
  }

}
