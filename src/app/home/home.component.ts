import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {MatTableDataSource , MatSort} from '@angular/material';

import { User } from '../model/index';
import { Message } from '../model/index';
import { Content } from '../model/index';
import { UserService } from '../services/user.service';
import { MessageService } from '../services/message.service';
import { ContentService } from '../services/content.service';
import { NavbarService } from '../navbar/navbar.service';
import { Observable ,  Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  messages: Message[] = [];
  contents: Content;

  constructor(public nav: NavbarService, private contentService: ContentService, private userService: UserService ) { }

  ngOnInit() {
    this.nav.dashActive = '';
    this.nav.homeActive = 'active';
    this.nav.profileActive = '';
    this.nav.show();

    this.contentService.getByKey('HOME_MESSAGE').subscribe(res => {
      this.contents = res;

  });

      // get messages from secure api end point
    /*  this.messageService.getAll()
          .subscribe(messages => {
              this.messages = messages;
          });

          this.userService.getAll()
          .subscribe(users => {
              this.users = users;
          });  */
  }

}
