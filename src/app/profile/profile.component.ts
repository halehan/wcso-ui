import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit() {
    this.nav.dashActive = '';
    this.nav.homeActive = '';
    this.nav.profileActive = 'active';
    this.nav.show();
  }

}
