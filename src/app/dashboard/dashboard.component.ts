import { Component, OnInit } from '@angular/core';
import { User } from '../model/index';
import { Message } from '../model/index';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';
import { MessageListComponent } from '../message-list/message-list.component';
import { NavbarService } from '../navbar/navbar.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  messages: Message[] = [];
  count = 0;
  title = '';

  constructor(public nav: NavbarService,
    private userService: UserService,
    private messageService: MessageService ) { }

  ngOnInit() {
     // get messages from secure api end point
     this.nav.show();
     this.nav.dashActive = 'active';
     this.nav.homeActive = '';
     this.nav.profileActive = '';
     this.count = this.nav.getCount();
     this.messageService.getAll()
     .subscribe(messages => {
         this.messages = messages;

     });

     this.userService.getAll()
     .subscribe(users => {
         this.users = users;

     });
  }

}
