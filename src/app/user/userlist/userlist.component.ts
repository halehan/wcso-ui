import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {MatTableDataSource , MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import { UserService } from '../../services/user.service';
import { User } from '../../model/index';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit,  AfterViewInit {

  displayedColumns = ['firstName', 'lastName', 'loginId', 'createdTime'];
  userDataSource = new MatTableDataSource();
  users: User[] = [];

  selectedUser: User;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService) { }

  ngAfterViewInit() {
    this.userDataSource.sort = this.sort;
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit() {

    this.userService.getAll()
    .subscribe(dogFace => {
        this.users = dogFace;
        this.userDataSource.data = dogFace;

    });

  }

  applyUserFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.userDataSource.filter = filterValue;
  }

  updateUser() {

 //   let userOperation: Observable<User[]>;

   // userOperation = this.commentService.updateComment(this.model)
  //  userOperation = 
    this.userService.update(this.selectedUser);

  }

}
