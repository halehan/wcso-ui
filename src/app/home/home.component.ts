import { Component, OnInit } from '@angular/core';

import { User } from '../model/index';
import { Message } from '../model/index';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  messages: Message[] = [];

  constructor(private userService: UserService, private messageService: MessageService ) { }

  ngOnInit() {
      // get messages from secure api end point
      this.messageService.getMessages()
          .subscribe(messages => {
              this.messages = messages;
          });

          this.userService.getUsers()
          .subscribe(users => {
              this.users = users;
          });
  }

}
