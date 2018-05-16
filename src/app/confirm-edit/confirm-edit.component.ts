import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-edit',
  templateUrl: './confirm-edit.component.html',
  styleUrls: ['./confirm-edit.component.css']
})
export class ConfirmEditComponent implements OnInit {
  title: string;
  description: string;
  category: string;
  funds_needed: string;
  constructor(public modalService: NgbActiveModal) { }

  ngOnInit() {
  }

}
