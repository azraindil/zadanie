import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import { ModalComponent } from 'src/app/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users:User[] =[];
  private jsonUrl = 'assets\\test.json';
  public keys = [];
 
  
  constructor(private http: HttpClient, private modalService: NgbModal) {
    
    this.getJSON().subscribe(res=> {
    this.users = res
  });

}
  
  ngOnInit(): void {
   
  }
 public getJSON(): Observable<any>{
   return this.http.get(this.jsonUrl);
 }
 public showInfo(i:number){
  const modalRef = this.modalService.open(ModalComponent);
  modalRef.componentInstance.info = this.users[i];
 }
 public edit(){
  
 }
 
}

