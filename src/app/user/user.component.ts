import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';
import { User } from '../model/index';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(public nav: NavbarService) { }

  ngOnInit() {

  }

}
