import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {MatTableDataSource , MatSort} from '@angular/material';
import { Message } from '../model/index';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit,  AfterViewInit {
  displayedColumns = ['message', 'threadId', 'created'];
  messageDataSource = new MatTableDataSource();
  subscription: Subscription;

  messages: Message[] = [];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private messageService: MessageService ) { }

   ngAfterViewInit() {
    this.messageDataSource.sort = this.sort;
  }

  ngOnInit() {
     // get messages from secure api end point
  //   this.subscription = this.messageService.getAll().subscribe(message => { this.messages = message; });

     this.messageService.getAll()
     .subscribe(messages => {
         this.messages = messages;
         this.messageDataSource.data = messages;
     });
  }

  applyMessageFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.messageDataSource.filter = filterValue;
  }

}
