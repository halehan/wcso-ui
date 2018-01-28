import { Injectable } from '@angular/core';

@Injectable()
export class NavbarService {
  vis: boolean;
  count: number;
  active: string;
  homeActive = '';
  dashActive = 'active';
  profileActive = '';
  listActive = '';

    constructor() { this.vis = false; this.count = this.count + 1}

   getHomeActive() {return this.homeActive}
   getDashActive() {return this.dashActive}
   getProfileActive() {return this.profileActive}
   getListActive() {return this.listActive}

    hide() { this.vis = false; this.count += 1; }

    show() { this.vis = true; this.count += 1; }

    getVisible() { return this.vis};

    getCount() {return this.count}

}
