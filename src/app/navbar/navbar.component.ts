import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appTitle = ' Law Enforcement On-Demand ';
  homeActive = '';
  dashActive = '';
  profileActive = '';
  listActive = '';
  vis: boolean;
  styleCls = '';
  constructor(public nav: NavbarService ) {}

  ngOnInit() {
    this.vis = this.nav.getVisible();
    this.styleCls = ((this.nav.getVisible()) ? '' : 'hiden');

    this.homeActive = this.nav.getHomeActive();
    this.dashActive = this.nav.getDashActive();
    this.profileActive = this.nav.getProfileActive();
  }

}
