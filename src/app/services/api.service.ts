import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { HttpClient } from "@angular/common/http";
 
 @Injectable()
 export class ApiService {
 
     private serviceUrl = "http://localhost:49439/api/users";
 
     constructor(private http: HttpClient) {

     }
 
     getUser(): Observable<User[]> {
        return this.http.get<User[]>(this.serviceUrl);
      }

      createUser(user) {
            let body = JSON.stringify(user);
            return this.http.post(this.serviceUrl, body);
        }

     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 }