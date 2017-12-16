import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { User } from '../model/index';
import { Message } from '../model/index';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  displayedColumns = ['message', 'threadId', 'created'];
  messageDataSource = new MatTableDataSource();

  messages: Message[] = [];

  constructor(private messageService: MessageService ) { }

  ngOnInit() {
     // get messages from secure api end point
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
