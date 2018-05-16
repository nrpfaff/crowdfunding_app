import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  constructor(public modalService: NgbActiveModal) { }
  title: string;
  description: string;
  category: string;
  funds_needed: string;
  ngOnInit() {
  }

}
