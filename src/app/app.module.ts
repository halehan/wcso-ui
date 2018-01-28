import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule } from '@angular/http';

import { AuthGuard } from './guards/index';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';
import { AuthenticationService } from './services/authentication.service';
import { AlertService} from './services/alert.service';
import { NavbarService } from './navbar/navbar.service';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';
import { UserComponent } from './user/user.component';
import { ToastrModule } from 'ngx-toastr';
import { SimpleTimer } from 'ng2-simple-timer';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { UserlistComponent } from './user/userlist/userlist.component';
import { AtableListComponent } from './atable-list/atable-list.component';
import { DateFormatPipe } from './date-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    MessageListComponent,
    MessageDetailComponent,
    ProfileComponent,
    MessageComponent,
    UserComponent,
    UserlistComponent,
    AtableListComponent,
    DateFormatPipe

  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 20000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    MessageService,
    AlertService,
    NavbarService,
    SimpleTimer,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
