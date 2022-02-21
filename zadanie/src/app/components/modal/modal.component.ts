import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  @Input() info:any;

  constructor(public activeModal: NgbActiveModal) {}
  
  
  ngOnInit(): void {
    
  }


}
