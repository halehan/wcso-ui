import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  appTitle = ' Law Enforcement On-Demand ';
  version = ' 1.02-RC-1';
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
