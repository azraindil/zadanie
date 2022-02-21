import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { User } from '../../models/User';
import { FormComponent } from 'src/app/components/form/form.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-users-second-table',
  templateUrl: './users-second-table.component.html',
  styleUrls: ['./users-second-table.component.css']
})
export class UsersSecondTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  private jsonUrl = 'assets\\test.json';
  public users:User[] =[];
  
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dtOptions={
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    }
    this.http.get(this.jsonUrl).subscribe((response: any) => {
      this.users = response
      this.dtTrigger.next(this.users);
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  public showInfo(i:number){
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.info = this.users[i];
   }
   
  public edit(i:number){
    const modalRef = this.modalService.open(FormComponent);
    modalRef.componentInstance.info = this.users[i];
   
   }
   public delete(i:number){
     this.users.splice(i, 1);
   }
}
