import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 
  @Input() info:any;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }


  saveEdited(name:string, gender:string, balance:string, company:string, email:string, phone:string){
    this.passEntry.emit(this.info.name = name)
    this.passEntry.emit(this.info.gender = gender);
    this.passEntry.emit(this.info.balance = balance);
    this.passEntry.emit(this.info.company = company);
    this.passEntry.emit(this.info.email = email);
    this.passEntry.emit(this.info.phone = phone);
  }
}
