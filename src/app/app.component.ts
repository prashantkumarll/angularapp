import { Component, Input } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Rx';
import {ApiService} from './services/api.service';
import { UserDataSource } from './UserDataSource';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  private user:User;
  private users : User[]=[];
  dataSource = new UserDataSource(this.apiSerivce);
  displayedColumns = ['FirstName','LastName','Dob','Designation','actions'];
   
  constructor(private http:HttpClient, private apiSerivce:ApiService){
    this.user ={
      Id:0,
      FirstName:'',
      LastName:'',
      Dob:new Date(),
      Designation:''
    };  
  }
 
  onSubmit(user: User){
    var url = "http://localhost:49439/api/users/createuser";
    this.http.post<User>(url,user).subscribe(res=>{
      user=res;
      window.location.reload();
    },err=>console.log(err));
  }

  onDeleteClicked(row){
    console.log(row.Id);
    var url = "http://localhost:49439/api/users/" + row.Id;
    this.http.delete(url).subscribe(res=>{
      for (let i = this.users.length - 1; i &= 0; i--) {
      if (this.users[i].Id === row.Id) {
        this.users.splice(i, 1);
      }
    };
    window.location.reload();
    },err=>console.log(err)); 
  } 
}