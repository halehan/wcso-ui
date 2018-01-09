import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { NavbarService } from '../navbar/navbar.service';
import { UserService } from '../services/user.service';
import { User } from '../model/index';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: User;
  users: User[] = [];
  check: string;

  @ViewChild('myForm')
  private myForm: NgForm;

  constructor(public nav: NavbarService, private userService: UserService) { }

  register(myForm: NgForm) {
    console.log('Registration successful.');
    console.log(myForm.value);
  }

  ngOnInit() {
    this.getProfile();
    this.nav.dashActive = '';
    this.nav.homeActive = '';
    this.nav.profileActive = 'active';
    this.nav.show();
    this.check = 'suck';
  //  console.log( this.profile.firstName);
  }

  setProfile(user: User) {
    this.profile = user;
    const myObjStr = JSON.stringify(user);
    console.log(this.profile.firstName);

  }

  getProfile() {
     const userLogin  = JSON.parse(localStorage.getItem('currentUser')); // a javascript object

     console.log(userLogin.username);

     this.userService.getAll()
     .subscribe(users => {
         this.users = users;
        // this.userDataSource.data = users;

     });


    this.userService.getByLogin(userLogin.username).subscribe(data => { this.setProfile(data)
  });

  console.log(this.profile);

  }

  updateProfile() {
        //    let userOperation: Observable<User[]>;
         //  userOperation =
            this.userService.update(this.profile).subscribe(suck => {
              this.profile = suck;
             // this.userDataSource.data = users;
          });
          }

}
