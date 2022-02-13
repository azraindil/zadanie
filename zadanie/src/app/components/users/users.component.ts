import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users:User[] =[];
  private jsonUrl = 'assets\\test.json';
 
  constructor(private http: HttpClient) {
    
    this.getJSON().subscribe(res=> {
    this.users = res
  })
}
  
  ngOnInit(): void {
   
  }
 public getJSON(): Observable<any>{
   return this.http.get(this.jsonUrl);
 }
}

