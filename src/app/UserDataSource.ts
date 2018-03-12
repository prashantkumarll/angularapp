import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';


export class UserDataSource extends DataSource<any> {
    constructor(private userService: ApiService) {
      super();
    }
    connect(): Observable<User[]> {
      return this.userService.getUser();
    }
    disconnect() {}
  }