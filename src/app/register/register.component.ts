import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,  FormGroup, FormBuilder, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  complexForm: FormGroup;
  hide = true;
  firstName: string;
  lastName: string;
  loginId: string;
  password: string;
  role: string;
  phoneMobile: string;


  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private fb: FormBuilder) {
      this.complexForm = fb.group({
        'firstName' :   [null, Validators.required],
        'lastName':     [null, Validators.required],
        'loginId' :     [null, Validators.required],
        'password' :    [null, Validators.compose([Validators.required, Validators.minLength(2)])],
        'phoneMobile' : []
      })

    }

    submitForm(value: any) {
      console.log(value);
    }

  ngOnInit() {

  }

  register(value: any) {
    this.loading = true;
    this.userService.create(value)
        .subscribe(
            data => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
  }
}
