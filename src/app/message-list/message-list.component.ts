import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {MatTableDataSource , MatSort, MatMenu} from '@angular/material';
import { Message } from '../model/index';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import { SimpleTimer } from 'ng2-simple-timer';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit,  AfterViewInit {
  displayedColumns = ['message', 'threadId', 'created', 'actionsColumn'];
  messageDataSource = new MatTableDataSource();
  subscription: Subscription;
  selectedMessage: Message;
  newMessage: Message;
  messages: Message[] = [];
  observableMessages: Observable<Message[]>;
  timerId: string;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private messageService: MessageService, private toastr: ToastrService, private st: SimpleTimer) {

   }

   ngAfterViewInit() {
    this.messageDataSource.sort = this.sort;
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
    this.newMessage = new Message();
    // this.newMessage = this.selectedMessage;
    this.newMessage.threadId = this.selectedMessage.threadId;
    this.newMessage.messageId = this.selectedMessage.messageId;
    this.newMessage.threadStatus = 'open';
    this.newMessage.message = '';

    console.log(this.selectedMessage.message);
    // this.myForm.controls['firstName'].setValue('DEF');
    // this.myForm.form.controls['firstName'].setValue('ABC');
    // this.myForm.form.controls['firstName'].setValue(user.firstName);


  }

  findAll() {

    this.messageService.getAll()
    .subscribe(messages => {
        this.messages = messages;
        this.messageDataSource.data = messages;
    });

  }

  ngOnInit() {
     // get messages from secure api end point
  //   this.subscription = this.messageService.getAll().subscribe(message => { this.messages = message; });
  this.findAll();
  this.st.newTimer('10sec', 10);
  this.timerId = this.st.subscribe('10sec', () => this.findAll());

  }

  applyMessageFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.messageDataSource.filter = filterValue;
  }

  closeThread(message: Message) {

    this.messageService.closeThread(message.threadId).subscribe(
      data => {
        this.toastr.success('Thread Closed Successfully', '', {
          timeOut: 2000,
        });
      },
      error => {
        this.toastr.success('Thread Close Error' + error, 'Thread Error', {
          timeOut: 2000,
        });
      });

  }

  sendMessage() {

    this.toastr.info('Sending Message', '', {
      timeOut: 2300,
    });

    this.messageService.sendMessage(this.newMessage).subscribe(
      data => {
        this.toastr.success('Message Sent Successfully', '', {
          timeOut: 2000,
        });
    //    this.findAll();
      },
      error => {
        this.toastr.success('Message Error' + error, 'Message Error', {
          timeOut: 2000,
        });
      });

  }

}
