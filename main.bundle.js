webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\ninput.ng-valid[required] {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\ninput.ng-invalid {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.error{\r\n    padding: 12px;\r\n    background-color: rgba(255, 0, 0, 0.2);\r\n    color: red;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" \n[ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}\n</div>\n<div *ngFor=\"let alert of alerts\" class=\"{{ cssClass(alert) }} alert-dismissable\">\n    {{alert.message}}\n    <a class=\"close\" (click)=\"removeAlert(alert)\">&times;</a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_alert__ = __webpack_require__("../../../../../src/app/model/alert.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        //   this.alertService.getMessage().subscribe(message => { this.message = message; });
        this.alertService.getAlert().subscribe(function (alert) {
            if (!alert) {
                // clear alerts when an empty alert is received
                _this.alerts = [];
                return;
            }
            // add alert to array
            _this.alerts.push(alert);
        });
    };
    AlertComponent.prototype.removeAlert = function (alert) {
        this.alerts = this.alerts.filter(function (x) { return x !== alert; });
    };
    AlertComponent.prototype.cssClass = function (alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case __WEBPACK_IMPORTED_MODULE_2__model_alert__["a" /* AlertType */].Success:
                return 'alert alert-success';
            case __WEBPACK_IMPORTED_MODULE_2__model_alert__["a" /* AlertType */].Error:
                return 'alert alert-danger';
            case __WEBPACK_IMPORTED_MODULE_2__model_alert__["a" /* AlertType */].Info:
                return 'alert alert-info';
            case __WEBPACK_IMPORTED_MODULE_2__model_alert__["a" /* AlertType */].Warning:
                return 'alert alert-warning';
        }
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__("../../../../../src/app/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n \n  <router-outlet></router-outlet>       \n  <app-alert></app-alert>         \n\n\n               \n        \n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_service__ = __webpack_require__("../../../../../src/app/navbar/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__alert_alert_component__ = __webpack_require__("../../../../../src/app/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__message_list_message_list_component__ = __webpack_require__("../../../../../src/app/message-list/message-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__message_detail_message_detail_component__ = __webpack_require__("../../../../../src/app/message-detail/message-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_simple_timer__ = __webpack_require__("../../../../ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng2_simple_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__user_userlist_userlist_component__ = __webpack_require__("../../../../../src/app/user/userlist/userlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__atable_list_atable_list_component__ = __webpack_require__("../../../../../src/app/atable-list/atable-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_18__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__message_list_message_list_component__["a" /* MessageListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__message_detail_message_detail_component__["a" /* MessageDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_23__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_24__message_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_25__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_30__user_userlist_userlist_component__["a" /* UserlistComponent */],
                __WEBPACK_IMPORTED_MODULE_31__atable_list_atable_list_component__["a" /* AtableListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_28__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26_ngx_toastr__["a" /* ToastrModule */].forRoot({
                    timeOut: 20000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["p" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["o" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["m" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["i" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["j" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["d" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["k" /* MatSelectModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_9__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_8__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_10__services_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_service__["a" /* NavbarService */],
                __WEBPACK_IMPORTED_MODULE_27_ng2_simple_timer__["SimpleTimer"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_index__ = __webpack_require__("../../../../../src/app/guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__atable_list_atable_list_component__ = __webpack_require__("../../../../../src/app/atable-list/atable-list.component.ts");










var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_index__["a" /* LoginComponent */] },
    { path: 'dash', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_index__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    { path: 'message', component: __WEBPACK_IMPORTED_MODULE_7__message_message_component__["a" /* MessageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_8__user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_9__atable_list_atable_list_component__["a" /* AtableListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/atable-list/atable-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"padtop\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header\" data-background-color=\"red\">\n                      <h4 class=\"title\">Users</h4>\n                      <p class=\"category\">List of application users</p>\n                  </div>\n                  <div class=\"card-content table-responsive\">\n                      <table class=\"table table-hover\">\n                          <thead>\n                              <tr>\n                                  <th>Login ID</th>\n                                  <th>First Name</th>\n                                  <th>Last Name</th>\n                                  <th>Phone</th>\n                              </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let user of users\">\n                                <td>{{user.loginId}}</td>\n                                <td>{{user.firstName}}</td>\n                                <td>{{user.lastName}}</td>\n                                <td>{{user.phoneMobile}}</td>\n                                <td>\n                                    <button (click)=\"onSelect(user)\" class=\"btn btn-primary btn-simple btn-xs\" rel=\"tooltip\" title=\"Edit User\" type=\"button\">\n                                        <i  class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                                                </button>\n                                    <button (click)=\"onSelectDelete(user)\" class=\"btn btn-primary btn-simple btn-xs\" rel=\"tooltip\" title=\"Delete User\" type=\"button\">\n                                        <i  class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                                    </button>\n                                </td>\n                            </tr>\n                          </tbody>\n                      </table>\n                  </div>\n              </div>\n          </div>\n      </div>\n   </div>\n</div>\n<br>\n<div class=\"container\" *ngIf=\"selectedUser\">\n      \n        <form> \n                <div class=\"row\">\n                        <div class=\"col-md-4 form-group\">\n                                <label for=\"firstNnameInput\">First Name</label>\n                                <input class=\"form-control\" type=\"text\" name=\"firstName\" required [(ngModel)]=\"selectedUser.firstName\" #firstName=\"ngModel\" placeholder=\"Joel\">\n                                    <div [hidden]=\"firstName.valid || firstName.pristine\" class=\"error\">\n                                        First Name is required.\n                                    </div>  \n                        </div>\n              \n              \n                    <div class=\"col-md-4 form-group\">\n                            <label for=\"lastNnameInput\">Last Name</label>\n                            <input class=\"form-control\" type=\"text\" name=\"lastName\" required [(ngModel)]=\"selectedUser.lastName\" #lastName=\"ngModel\" placeholder=\"Jones\">\n                                <div [hidden]=\"lastName.valid || lastName.pristine\" class=\"error\">\n                                    Last Name is required.\n                                </div>  \n                           \n                    </div>\n                    <div class=\"col-md-4 form-group\">\n                            <label for=\"phoneMobileInput\">Phone</label>\n                            <input class=\"form-control\" type=\"text\" name=\"phoneMobile\" required [(ngModel)]=\"selectedUser.phoneMobile\" #phoneMobile=\"ngModel\" placeholder=\"(###) ###-####\">\n                                <div [hidden]=\"phoneMobile.valid || phoneMobile.pristine\" class=\"error\">\n                                    Phone Number is required.\n                                </div>  \n    \n                    </div>\n                </div>\n                <div class=\"row\">\n                        <div class=\"col-md-12 form-group\">\n                                <label for=\"addressInput\">Address</label>\n                                <input class=\"form-control\" type=\"text\" name=\"address\" required [(ngModel)]=\"selectedUser.address\" #address=\"ngModel\" placeholder=\"Address\">\n                                    <div [hidden]=\"address.valid || address.pristine\" class=\"error\">\n                                       Address is required.\n                                    </div>  \n\n\n                        </div>\n                </div>\n                <div class=\"row\">\n                        <div class=\"col-md-4 form-group\">\n                                <label for=\"CityInput\">City</label>\n                                <input class=\"form-control\" type=\"text\" name=\"city\" required [(ngModel)]=\"selectedUser.city\" #city=\"ngModel\" placeholder=\"City\">\n                                    <div [hidden]=\"city.valid || city.pristine\" class=\"error\">\n                                        City is required.\n                                    </div>  \n\n                        </div>\n                        <div class=\"col-md-4 form-group\">\n                                <label for=\"CityInput\">State</label>\n                                <input class=\"form-control\" type=\"text\" name=\"state\" required [(ngModel)]=\"selectedUser.state\" #state=\"ngModel\" placeholder=\"State\">\n                                    <div [hidden]=\"state.valid || state.pristine\" class=\"error\">\n                                        State is required.\n                                    </div>  \n\n                        </div>\n                        <div class=\"col-md-4 form-group\">\n                                <label for=\"zipInput\">Zip</label>\n                                <input class=\"form-control\" type=\"text\" name=\"zip\" required [(ngModel)]=\"selectedUser.zip\" #zip=\"ngModel\" placeholder=\"zip\">\n                                    <div [hidden]=\"zip.valid || zip.pristine\" class=\"error\">\n                                        Zip is required.\n                                    </div>  \n\n                        </div>\n                </div>\n                <div class=\"row\">\n               \n                </div>\n                    <button (click)=\"updateUser()\" type=\"submit\" class=\"btn btn-primary\">Save</button> \n            </form> \n        </div>\n        <br>\n"

/***/ }),

/***/ "../../../../../src/app/atable-list/atable-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.padtop {\n  padding-top: 5.5em;\n  padding-left: 1.5em;\n  padding-right: 1.5em; }\n\ni {\n  padding-left: 0.5em;\n  padding-right: 0.5em; }\n\n.btn.btn-primary.btn-simple, .navbar .navbar-nav > li > a.btn.btn-primary.btn-simple {\n  background-color: transparent;\n  color: black;\n  box-shadow: none;\n  border: none;\n  padding-left: 0.5em;\n  padding-right: 0.5em; }\n\ninput.ng-valid[required] {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\ninput.ng-invalid {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\n.error {\n  padding: 12px;\n  background-color: rgba(255, 0, 0, 0.2);\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/atable-list/atable-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Employee */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtableListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_service__ = __webpack_require__("../../../../../src/app/navbar/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());

var AtableListComponent = (function () {
    function AtableListComponent(nav, userService, toastr) {
        this.nav = nav;
        this.userService = userService;
        this.toastr = toastr;
        this.users = [];
    }
    AtableListComponent.prototype.printMyForm = function () {
        console.log(this.myForm);
    };
    AtableListComponent.prototype.register = function (myForm) {
        console.log('Registration successful.');
        console.log(myForm.value);
    };
    AtableListComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
        // this.myForm.controls['firstName'].setValue('DEF');
        // this.myForm.form.controls['firstName'].setValue('ABC');
        // this.myForm.form.controls['firstName'].setValue(user.firstName);
    };
    AtableListComponent.prototype.onSelectDelete = function (user) {
        this.selectedUser = user;
    };
    AtableListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.dashActive = '';
        this.nav.homeActive = '';
        this.nav.profileActive = '';
        this.nav.listActive = 'active';
        this.nav.show();
        this.userService.getAll()
            .subscribe(function (users) {
            _this.users = users;
            // this.userDataSource.data = users;
        });
    };
    AtableListComponent.prototype.updateUser = function () {
        //    let userOperation: Observable<User[]>;
        var _this = this;
        //  userOperation =
        this.userService.update(this.selectedUser).subscribe(function (suck) {
            _this.selectedUser = suck;
            // this.userDataSource.data = users;
        });
        this.toastr.success('User Update Successful', 'User Update', {
            timeOut: 2000,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('myForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_forms__["i" /* NgForm */])
    ], AtableListComponent.prototype, "myForm", void 0);
    AtableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-atable-list',
            template: __webpack_require__("../../../../../src/app/atable-list/atable-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/atable-list/atable-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__navbar_navbar_service__["a" /* NavbarService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */]])
    ], AtableListComponent);
    return AtableListComponent;
}());

var EMPLOYEES = [
    { id: 1, name: 'Dakota Rice', salary: '$45,098', country: 'Niger', city: 'Oud-Turnhout' },
    { id: 2, name: 'Minerva Hooper', salary: '$25,098', country: 'Curaçao', city: 'Sinaai-Waas' },
    { id: 13, name: 'Sage Rodriguez', salary: '$15,098', country: 'USA', city: 'Altha' },
    { id: 14, name: 'Philip Chaney', salary: '$465,098', country: 'Netherlands', city: 'Baileux' },
    { id: 15, name: 'Doris Greene', salary: '$45,098', country: 'USA', city: 'Altha' },
    { id: 16, name: 'Mason Porter', salary: '$78,615', country: 'Chile', city: 'Gloucester' }
];


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n      <nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\n        <ul class=\"nav nav-pills flex-column\">\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/message']\"  class=\"nav-link  \" href=\"#\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>&nbsp; Messages</a>\n          </li>\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/dash']\"  class=\"nav-link  active\" href=\"#\"><i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>&nbsp; Reports</a>\n          </li>\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/user']\"  class=\"nav-link  \" href=\"#\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i>&nbsp; Users</a>\n          </li>\n        </ul>\n\n      </nav>\n\n      <main class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n       <h1></h1>\n\n        <section class=\"row text-center placeholders\">\n          <div class=\"col-6 col-sm-3 placeholder\">\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n            <h4>Label</h4>\n            <div class=\"text-muted\">Something else</div>\n          </div>\n          <div class=\"col-6 col-sm-3 placeholder\">\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n            <h4>Label</h4>\n            <span class=\"text-muted\">Something else</span>\n          </div>\n          <div class=\"col-6 col-sm-3 placeholder\">\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n            <h4>Label</h4>\n            <span class=\"text-muted\">Something else</span>\n          </div>\n          <div class=\"col-6 col-sm-3 placeholder\">\n            <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\" alt=\"Generic placeholder thumbnail\">\n            <h4>Label</h4>\n            <span class=\"text-muted\">Something else</span>\n          </div>\n        </section>\n       \n      \n  \n\n    \n      </main>\n    </div>\n  </div>  "

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Base structure\r\n */\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px; }\n\n/*\r\n   * Typography\r\n   */\nh1 {\n  margin-bottom: 21px;\n  padding-bottom: 9px;\n  border-bottom: 1px solid #eee; }\n\n/*\r\n   * Sidebar\r\n   */\n.sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n  border-right: 1px solid #eee; }\n\n/* Sidebar navigation */\n.sidebar {\n  padding-left: 0;\n  padding-right: 0; }\n\n.sidebar .nav {\n  margin-bottom: 20px; }\n\n.sidebar .nav-item {\n  width: 100%; }\n\n.sidebar .nav-item + .nav-item {\n  margin-left: 0; }\n\n.sidebar .nav-link {\n  border-radius: 0; }\n\n/*\r\n   * Dashboard\r\n   */\n/* Placeholders */\n.placeholders {\n  padding-bottom: 3rem; }\n\n.placeholder img {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem; }\n\n.nav-pills .nav-link.active, .nav-pills .nav-item.show .nav-link {\n  color: #fff;\n  cursor: default;\n  background-color: #27880d !important; }\n\na {\n  color: #27880d;\n  text-decoration: none; }\n\n.bg-faded {\n  background-color: #000000 white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_service__ = __webpack_require__("../../../../../src/app/navbar/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(nav, userService, messageService) {
        this.nav = nav;
        this.userService = userService;
        this.messageService = messageService;
        this.users = [];
        this.messages = [];
        this.count = 0;
        this.title = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get messages from secure api end point
        this.nav.show();
        this.nav.dashActive = 'active';
        this.nav.homeActive = '';
        this.nav.profileActive = '';
        this.nav.listActive = '';
        this.count = this.nav.getCount();
        this.messageService.getAll()
            .subscribe(function (messages) {
            _this.messages = messages;
        });
        this.userService.getAll()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__navbar_navbar_service__["a" /* NavbarService */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Sticky footer styles\r\n-------------------------------------------------- */\r\nhtml {\r\n    position: relative;\r\n    min-height: 100%;\r\n  }\r\n  body {\r\n    /* Margin bottom by footer height */\r\n    margin-bottom: 60px;\r\n  }\r\n  .footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    /* Set the fixed height of the footer here */\r\n    height: 60px;\r\n    line-height: 60px; /* Vertically center the text there */\r\n    background-color: #f5f5f5;\r\n  }\r\n  \r\n  \r\n  /* Custom page CSS\r\n  -------------------------------------------------- */\r\n  /* Not required for template or sticky footer method. */\r\n  \r\n  body > .container {\r\n    padding: 60px 15px 0;\r\n  }\r\n  \r\n  .footer > .container {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n  \r\n  code {\r\n    font-size: 80%;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n      <span class=\"text-muted\">Place sticky footer content here.</span>\n    </div>\n</footer>\n\n\n  <!-- Bootstrap core JavaScript\n  ================================================== -->\n  <!-- Placed at the end of the document so the pages load faster -->\n  <script src=\"https://code.jquery.com/jquery-3.1.1.slim.min.js\" integrity=\"sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n\" crossorigin=\"anonymous\"></script>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js\" integrity=\"sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb\" crossorigin=\"anonymous\"></script>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth-guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Move down content because we have a fixed navbar that is 3.5rem tall */\r\nbody {\r\n    padding-top: 3.5rem;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<p>Homej</p>\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_service__ = __webpack_require__("../../../../../src/app/navbar/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(nav, userService, messageService) {
        this.nav = nav;
        this.userService = userService;
        this.messageService = messageService;
        this.users = [];
        this.messages = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nav.dashActive = '';
        this.nav.homeActive = 'active';
        this.nav.profileActive = '';
        this.nav.show();
        // get messages from secure api end point
        this.messageService.getAll()
            .subscribe(function (messages) {
            _this.messages = messages;
        });
        this.userService.getAll()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__navbar_navbar_service__["a" /* NavbarService */], __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-heading {\r\n  padding: 5px 15px;\r\n}\r\n\r\n.panel-footer {\r\npadding: 1px 15px;\r\ncolor: #A0A0A0;\r\n}\r\n\r\n.profile-img {\r\nwidth: 96px;\r\nheight: 96px;\r\nmargin: 0 auto 10px;\r\ndisplay: block;\r\nborder-radius: 50%;\r\n}\r\n\r\n\r\n\r\nbody{\r\n    background: #00589F;\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00589F', endColorstr='#0073CF', GradientType=0);\r\n    background: linear-gradient(to bottom, #00589F 50%, #0073CF) !important;\r\n    color: white;\r\n  }\r\n  \r\n  div.well{\r\n    height: 150px;\r\n  } \r\n  \r\n  .Absolute-Center {\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0; left: 0; bottom: 0; right: 0;\r\n  }\r\n  \r\n  .Absolute-Center.is-Responsive {\r\n    width: 50%; \r\n    height: 50%;\r\n    min-width: 200px;\r\n    max-width: 400px;\r\n    padding: 40px;\r\n  }\r\n  \r\n  #logo-container{\r\n    margin: auto;\r\n    margin-bottom: 10px;\r\n    width:200px;\r\n    height:30px;\r\n    background-image:url('http://placehold.it/200x30/000000/ffffff/&text=BRAND+LOGO');\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 col-md-12\">\n       \n</div>\n<div class=\"container\" style=\"margin-top:100px\">\n    <div class=\"row\">\n      <div class=\"Absolute-Center is-Responsive\">\n            <div class=\"col-sm-12 col-md-12 col-md-offset-1\">\n            <div class=\"panel panel-default\">\n               \n                <div class=\"panel-body\">\n                    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n                        <fieldset>\n                        <!--    <div class=\"row\">\n                                <div class=\"center-block\">\n                                    <img class=\"profile-img\"\n                                        src=\"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120\" alt=\"\">\n                                </div>\n                            </div>  -->\n                            <div class=\"row\">\n                                <div class=\"col-sm-12 col-md-12 col-md-offset-1 \">\n                                    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"fa fa-user\"></i>\n                                            </span> \n                                           \n                                            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                                            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n                                     </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"fa fa-lock\"></i>\n                                            </span>\n                                           \n                                            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                                            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group\">\n                                            <button [disabled]=\"loading\" class=\"btn btn-lg btn-primary btn-block\">Login</button>\n                                            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n                        </fieldset>\n                        \n                    </form>\n                </div>\n                \n                <div class=\"panel-footer \">\n                                Don't have an account!<a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n                             <!--   <a [routerLink]=\"['/dash']\" class=\"btn btn-link\">Dashboard</a> -->\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n</div>\n<!--\n    \n\n<div class=\"container\">\n<div class=\"col-sm-8 col-sm-offset-2\">\n<div class=\"col-md-6 col-md-offset-3\">\n        <h2>Login</h2>\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n                <label for=\"username\">Username</label>\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n            </div>\n            <div class=\"form-group\">\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n                <a [routerLink]=\"['/dash']\" class=\"btn btn-link\">Dashboard</a>\n            </div>\n            <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n        </form>\n    </div>\n    </div>\n    </div>\n-->"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/dash']);
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message-detail/message-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  \n  <mat-form-field>\n      <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n      <mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n    </mat-form-field>\n\n  <mat-form-field>\n    <textarea matInput placeholder=\"Message\"></textarea>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-select placeholder=\"Select\">\n      <mat-option value=\"option\">Option</mat-option>\n      <mat-option value=\"mullet\">Mullet</mat-option>\n      <mat-option value=\"catfish\">Catfish</mat-option>\n    </mat-select> \n  </mat-form-field>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/message-detail/message-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-detail/message-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageDetailComponent = (function () {
    function MessageDetailComponent() {
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
    }
    MessageDetailComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    MessageDetailComponent.prototype.ngOnInit = function () {
    };
    MessageDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-message-detail',
            template: __webpack_require__("../../../../../src/app/message-detail/message-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message-detail/message-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageDetailComponent);
    return MessageDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message-list/message-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <div class=\"example-header\">\n      <mat-form-field>\n        <input matInput (keyup)=\"applyMessageFilter($event.target.value)\" placeholder=\"Filter\">\n      </mat-form-field>\n    </div>\n  \n    <mat-table #table [dataSource]=\"messageDataSource\" matSort>\n  \n      <ng-container matColumnDef=\"message\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Message </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.message}} </mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"threadId\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> ThreadId </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.threadId}} </mat-cell>\n      </ng-container>  \n  \n      <ng-container matColumnDef=\"created\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Created </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">{{ row.createdTime | date }}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"actionsColumn\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Reply &nbsp; &nbsp; Close Thread</mat-header-cell>\n         \n          <mat-cell *matCellDef=\"let row\">\n            <button *ngIf=\"!row.editing\" mat-icon-button color=\"primary\" focusable=\"false\" (click)=\"onSelect(row)\">\n                  <i class=\"fa fa-pencil mat-icon\"></i>\n                </button>\n                <button  *ngIf=\"!row.editing\" mat-icon-button color=\"primary\" focusable=\"false\" (click)=\"closeThread(row)\">\n                    <i class=\"fa fa-times mat-icon\"></i>\n                  </button> \n            <button   *ngIf=\"row.editing\" mat-icon-button color=\"primary\" focusable=\"false\" (click)=\"row.confirmEditCreate()\">\n                  <i class=\"fa fa-check mat-icon\"></i>  \n                </button>  \n                \n            \n          </mat-cell>\n        </ng-container>\n  \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row> \n\n    \n    </mat-table>\n    <br>\n    <br>\n<hr>\n    <div *ngIf=\"selectedMessage\">\n        <div class=\"row\">\n              <div class=\"col-md-12\">\n               <!--   <mat-form-field> -->\n                      <textarea  placeholder=\"Joel\" matTextareaAutosize matAutosizeMinRows=\"4\"\n                      matAutosizeMaxRows=\"10\" matInput placeholder=\"Message\"> {{selectedMessage.message}}</textarea>\n                <!--      <button mat-button>Click me!</button>  \n                      \n                    </mat-form-field>  -->\n               </div>\n           \n        </div>\n        <hr>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <textarea  name=\"message\" required [(ngModel)]=\"newMessage.message\" #message=\"ngModel\" placeholder=\"message\" matTextareaAutosize matAutosizeMinRows=\"4\"\n                matAutosizeMaxRows=\"10\" matInput> </textarea>\n\n             </div>\n             <div class=\"col-md-4\">\n                <button (click)=\"sendMessage()\" type=\"button\" class=\"btn btn-success\"> Send </button>  \n             </div>\n\n             \n\n        </div>\n\n        <div class=\"row\">\n\n          <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Confirm Close Thread</h4>\n              <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <p>To close thread click Ok</p>\n            </div>\n            <div class=\"modal-footer\">\n              \n              <button type=\"button\" class=\"btn btn-outline-light\" (click)=\"open(content, row)\" >Ok</button>\n              <button type=\"button\" class=\"btn btn-outline-light\" (click)=\"c('Close click')\">Cancel</button>\n            </div>\n          </ng-template>\n          \n          <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\n\n        </div>\n\n  \n       \n       \n\n       \n      \n    <!--    <mat-form-field>\n          <mat-select placeholder=\"Select\">\n            <mat-option value=\"option\">Option</mat-option>\n          </mat-select>\n        </mat-form-field>  -->\n      </div>\n\n      <br>\n      <br>\n  \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/message-list/message-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.mat-header-cell.mat-sort-header-sorted {\n  color: black; }\n\n.dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white; }\n\n.dark-modal .close {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-list/message-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_index__ = __webpack_require__("../../../../../src/app/model/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_simple_timer__ = __webpack_require__("../../../../ng2-simple-timer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_simple_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessageListComponent = (function () {
    function MessageListComponent(messageService, toastr, st, modalService) {
        this.messageService = messageService;
        this.toastr = toastr;
        this.st = st;
        this.modalService = modalService;
        this.displayedColumns = ['message', 'threadId', 'created', 'actionsColumn'];
        this.messageDataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatTableDataSource */]();
        this.messages = [];
    }
    MessageListComponent.prototype.ngOnDestroy = function () {
        this.st.unsubscribe(this.timerId);
        console.log('calling ngOnDestroy');
    };
    MessageListComponent.prototype.open = function (content, message) {
        this.selectedMessage = message;
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    MessageListComponent.prototype.ngAfterViewInit = function () {
        this.messageDataSource.sort = this.sort;
    };
    MessageListComponent.prototype.onSelect = function (message) {
        this.selectedMessage = message;
        this.newMessage = new __WEBPACK_IMPORTED_MODULE_2__model_index__["a" /* Message */]();
        // this.newMessage = this.selectedMessage;
        this.newMessage.threadId = this.selectedMessage.threadId;
        this.newMessage.messageId = this.selectedMessage.messageId;
        this.newMessage.threadStatus = 'open';
        this.newMessage.message = '';
        console.log(this.selectedMessage.message);
        // this.myForm.controls['firstName'].setValue('DEF');
        // this.myForm.form.controls['firstName'].setValue('ABC');
        // this.myForm.form.controls['firstName'].setValue(user.firstName);
    };
    MessageListComponent.prototype.findAll = function () {
        var _this = this;
        this.messageService.getAll()
            .subscribe(function (messages) {
            _this.messages = messages;
            _this.messageDataSource.data = messages;
        });
    };
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get messages from secure api end point
        //   this.subscription = this.messageService.getAll().subscribe(message => { this.messages = message; });
        this.findAll();
        this.st.newTimer('30sec', 30);
        this.timerId = this.st.subscribe('30sec', function () { return _this.findAll(); });
    };
    MessageListComponent.prototype.applyMessageFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.messageDataSource.filter = filterValue;
    };
    MessageListComponent.prototype.closeThread = function (message) {
        var _this = this;
        this.messageService.closeThread(message).subscribe(function (data) {
            _this.toastr.success('Thread Closed Successfully', '', {
                timeOut: 2000,
            });
        }, function (error) {
            _this.toastr.success('Thread Close Error' + error, 'Thread Error', {
                timeOut: 2000,
            });
        });
    };
    MessageListComponent.prototype.sendMessage = function () {
        var _this = this;
        this.toastr.info('Sending Message', '', {
            timeOut: 2300,
        });
        this.messageService.sendMessage(this.newMessage).subscribe(function (data) {
            _this.toastr.success('Message Sent Successfully', '', {
                timeOut: 2000,
            });
            //    this.findAll();
        }, function (error) {
            _this.toastr.success('Message Error' + error, 'Message Error', {
                timeOut: 2000,
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MessageListComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSort */])
    ], MessageListComponent.prototype, "sort", void 0);
    MessageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__("../../../../../src/app/message-list/message-list.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/message-list/message-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_5_ng2_simple_timer__["SimpleTimer"],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], MessageListComponent);
    return MessageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n    <div class=\"row\">\n     <nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\n        <ul class=\"nav nav-pills flex-column\">\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/message']\"  class=\"nav-link  active\" href=\"#\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>&nbsp; Messages</a>\n          </li>\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/dash']\" class=\"nav-link\" href=\"#\"><i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>&nbsp;Reports</a>\n          </li>\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/user']\"  class=\"nav-link \" href=\"#\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i>&nbsp; Users</a>\n          </li>\n        </ul>\n\n      </nav>   \n\n      <main class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n        <h1></h1>\n\n       \n\n        <mat-toolbar>\n            <span>Messages</span>\n        </mat-toolbar>\n        <app-message-list></app-message-list>\n        \n       \n     <!--   <app-message-detail></app-message-detail>  -->\n      \n\n    \n  \n\n       \n\n       \n\n    \n      </main>\n    </div>\n  </div>  "

/***/ }),

/***/ "../../../../../src/app/message/message.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Base structure\r\n */\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px; }\n\n/*\r\n   * Typography\r\n   */\nh1 {\n  margin-top: 21px;\n  margin-bottom: 21px;\n  padding-bottom: 9px;\n  border-bottom: 1px solid #eee; }\n\n/*\r\n   * Sidebar\r\n   */\n.sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n  border-right: 1px solid #eee; }\n\n/* Sidebar navigation */\n.sidebar {\n  padding-left: 0;\n  padding-right: 0; }\n\n.sidebar .nav {\n  margin-bottom: 20px; }\n\n.sidebar .nav-item {\n  width: 100%; }\n\n.sidebar .nav-item + .nav-item {\n  margin-left: 0; }\n\n.sidebar .nav-link {\n  border-radius: 0; }\n\n/*\r\n   * Dashboard\r\n   */\n/* Placeholders */\n.placeholders {\n  padding-bottom: 3rem; }\n\n.placeholder img {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem; }\n\n.nav-pills .nav-link.active, .nav-pills .nav-item.show .nav-link {\n  color: #fff;\n  cursor: default;\n  background-color: #27880d !important; }\n\na {\n  color: #27880d;\n  text-decoration: none; }\n\n.bg-faded {\n  background-color: #000000 white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageComponent = (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-message',
            template: __webpack_require__("../../../../../src/app/message/message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/message.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/alert.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Alert */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertType; });
var Alert = (function () {
    function Alert() {
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "../../../../../src/app/model/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__("../../../../../src/app/model/user.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message__ = __webpack_require__("../../../../../src/app/model/message.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__message__["a"]; });




/***/ }),

/***/ "../../../../../src/app/model/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "../../../../../src/app/model/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Move down content because we have a fixed navbar that is 3.5rem tall */\r\nbody {\r\n    padding-top: 3.5rem;\r\n  }\r\n\r\n  .bg-inverse {background-color: #27880d !important;}\r\n\r\n  .fade-out {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: visibility 0s 1s, opacity 1s linear;\r\n  }\r\n\r\n  .fade-in {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transition: opacity 1s linear;\r\n  }\r\n\r\n .hiden{\r\n    display:none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse \" >\n    <button class=\"navbar-toggler navbar-toggler-right hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"#\">WCSO{{test}} {{styleCls}}</a>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav ml-auto \">\n          <li class=\"nav-item {{homeActive}} {{styleCls}} \">\n      <!--      <a class=\"nav-link\" href=\"/\"><i class=\"fa fa-home fa-fw\" aria-hidden=\"true\"></i>&nbsp; Home <span class=\"sr-only\">(current)</span></a>  -->\n            <a [routerLink]=\"['/']\" class=\"nav-link\" href=\"#\"><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>&nbsp; Home</a>\n          </li>\n          <li class=\"nav-item {{dashActive}}  {{styleCls}} \">\n         <!--     <a class=\"nav-link\" href=\"dash\"><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>&nbsp; Dashboard</a>  -->\n              <a [routerLink]=\"['/dash']\" class=\"nav-link\" href=\"#\"><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>&nbsp; Dashboard</a>\n          </li>\n          <li class=\"nav-item {{listActive}}   \">\n            <!--     <a class=\"nav-link\" href=\"dash\"><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>&nbsp; Dashboard</a>  -->\n                 <a [routerLink]=\"['/list']\" class=\"nav-link\" href=\"#\"><i class=\"fa fa-tachometer\" aria-hidden=\"true\"></i>&nbsp; List</a>\n             </li>\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/login']\" class=\"nav-link\" href=\"#\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>&nbsp; Logout</a>\n          </li>\n     <!--     <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n          </li> -->\n          <li class=\"nav-item {{profileActive}}\">\n              <a [routerLink]=\"['/profile']\" class=\"nav-link\" href=\"#\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp; My Profile</a>\n          </li>\n         \n        </ul>\n      \n      </div>\n  </nav>\n  "

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_service__ = __webpack_require__("../../../../../src/app/navbar/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(nav) {
        this.nav = nav;
        this.test = ' Social Media Messenger';
        this.homeActive = '';
        this.dashActive = '';
        this.profileActive = '';
        this.listActive = '';
        this.styleCls = '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.vis = this.nav.getVisible();
        this.styleCls = ((this.nav.getVisible()) ? '' : 'hiden');
        this.styleCls = ((this.nav.getVisible()) ? '' : 'hiden');
        this.homeActive = this.nav.getHomeActive();
        this.dashActive = this.nav.getDashActive();
        this.profileActive = this.nav.getProfileActive();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__navbar_service__["a" /* NavbarService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarService = (function () {
    function NavbarService() {
        this.homeActive = '';
        this.dashActive = 'active';
        this.profileActive = '';
        this.listActive = '';
        this.vis = false;
        this.count = this.count + 1;
    }
    NavbarService.prototype.getHomeActive = function () { return this.homeActive; };
    NavbarService.prototype.getDashActive = function () { return this.dashActive; };
    NavbarService.prototype.getProfileActive = function () { return this.profileActive; };
    NavbarService.prototype.getListActive = function () { return this.listActive; };
    NavbarService.prototype.hide = function () { this.vis = false; this.count += 1; };
    NavbarService.prototype.show = function () { this.vis = true; this.count += 1; };
    NavbarService.prototype.getVisible = function () { return this.vis; };
    ;
    NavbarService.prototype.getCount = function () { return this.count; };
    NavbarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<br>\n<h1></h1>\n<!--  <div class=\"main-content\">  -->\n  <div class=\"container-fluid\">\n      <div class=\"row justify-content-md-center\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header\" data-background-color=\"red\">\n                      <h4 class=\"title\"></h4>\n                      <p class=\"category\">Complete your profile</p>\n                  </div>\n                  <div class=\"card-content\">\n                      <form #myForm=\"ngForm\">\n                          <div class=\"row\">\n                       <!--       <div class=\"col-md-5\">\n                                  <div class=\"form-group form-black label-floating is-empty\">\n                                      <label class=\"control-label\">Company (disabled)</label>\n                                      <input type=\"text\" class=\"form-control\" disabled>\n                                      {{value}}\n                                  </div>\n                              </div>  -->\n                       <!--       <div class=\"col-md-6\">\n                                  <div class=\"form-group form-black label-floating is-empty\">\n                                      <label class=\"control-label\">Username</label>\n                                      <input  *ngIf=\"profile\" type=\"text\" value=\"{{profile.firstName}}\" class=\"form-control\" >\n                                  </div>\n                              </div>\n                              <div class=\"col-md-6\">\n                                  <div class=\"form-group form-black label-floating is-empty\">\n                                      <label class=\"control-label\">Logon Id</label>\n                                      <input type=\"loginId\" disabled name=\"loginId\" required [(ngModel)]=\"profile.loginId\" #loginId=\"ngModel\" class=\"form-control\" >\n                                  </div>\n                              </div>  -->\n                          </div> \n  \n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <div class=\"form-group form-black label-floating is-empty\">\n                                      <label class=\"control-label\">First Name</label>\n                                      <input type=\"text\" name=\"firstName\" required [(ngModel)]=\"profile.firstName\" #firstName=\"ngModel\" class=\"form-control\" >\n                                  </div>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <div class=\"form-group form-black label-floating is-empty\">\n                                      <label class=\"control-label\">Last Name</label>\n                                      <input type=\"text\" name=\"lastName\" required [(ngModel)]=\"profile.lastName\" #lastName=\"ngModel\" class=\"form-control\" >\n                                  </div>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                                    <label class=\"control-label\">Phone Number</label>\n                                    <input type=\"text\" name=\"phoneMobile\" required [(ngModel)]=\"profile.phoneMobile\" #phoneMobile=\"ngModel\" class=\"form-control\" >\n                                </div>\n                            </div>\n                          </div>\n  \n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                  <div class=\"form-group form-black label-floating is-empty\">\n                                      <label class=\"control-label\">Address</label>\n                                      <input type=\"text\"  name=\"address\" required [(ngModel)]=\"profile.address\" #address=\"ngModel\" class=\"form-control\" >\n                                  </div>\n                              </div>\n                          </div>\n  \n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <div class=\"form-group form-black label-floating is-empty\">\n                                      <label class=\"control-label\">City</label>\n                                      <input type=\"text\" name=\"city\" required [(ngModel)]=\"profile.city\" #city=\"ngModel\" class=\"form-control\" >\n                                  </div>\n                              </div>\n\n                              <div class=\"col-md-4\">\n                                <div class=\"form-group form-black label-floating is-empty\">\n                               <!--     <label class=\"control-label\">State</label> \n                                    <input type=\"text\" name=\"state\" required [(ngModel)]=\"profile.state\" #state=\"ngModel\" class=\"form-control\" > -->\n                                    <label for=\"typeahead-basic\">Search for a state:</label>\n                                <!--    <input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" [(ngModel)]=\"profile.state\" [ngbTypeahead]=\"search\"/>  -->\n                                    <input id=\"typeahead-basic\" type=\"text\" class=\"form-control\" name=\"state\" [ngbTypeahead]=\"search\" required [(ngModel)]=\"profile.state\" #state=\"ngModel\"  >\n                                </div>\n                            </div>\n                             \n                              <div class=\"col-md-4\">\n                                  <div class=\"form-group form-black label-floating is-empty\">\n                                      <label class=\"control-label\">Zip Code</label>\n                                      <input type=\"text\" name=\"zip\" required [(ngModel)]=\"profile.zip\" #zip=\"ngModel\" class=\"form-control\" >\n                                  </div>\n                              </div>\n                          </div>\n  \n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                  <div class=\"form-group\">\n                                      <label>About Me</label>\n                                      <div class=\"form-group form-black label-floating is-empty\">\n                                         \n                                          <textarea class=\"form-control\" name=\"about\" required [(ngModel)]=\"profile.about\" #about=\"ngModel\" rows=\"5\"></textarea>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n  \n                          <button (click)=\"updateProfile()\" type=\"submit\" [disabled]=\"!myForm.dirty\" class=\"btn btn-success pull-right\">Update Profile</button>\n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n        <!--  <div class=\"col-md-4\">\n              <div class=\"card card-profile\">\n                  <div class=\"card-avatar\">\n                      <a href=\"#pablo\">\n                          <img class=\"img\" src=\"../assets/img/faces/marc.jpg\" />\n                      </a>\n                  </div>\n  \n                  <div class=\"content\">\n                      <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\n                      <h4 class=\"card-title\">Alec Thompson</h4>\n                      <p class=\"card-content\">\n                          Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                      </p>\n                      <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Follow</a>\n                  </div>\n              </div>\n          </div>   -->\n      </div>\n  </div>\n  </div>\n <!-- </div>  -->\n  \n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  margin-bottom: 21px;\n  padding-bottom: 9px;\n  border-bottom: 1px solid #eee; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navbar_navbar_service__ = __webpack_require__("../../../../../src/app/navbar/navbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var ProfileComponent = (function () {
    function ProfileComponent(nav, userService, alertService, toastr) {
        this.nav = nav;
        this.userService = userService;
        this.alertService = alertService;
        this.toastr = toastr;
        this.users = [];
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
    }
    ProfileComponent.prototype.showNotification = function () {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        // this.alertService.success('This is a test', false);
        //  $.notify('Hello World');
        var color = Math.floor((Math.random() * 4) + 1);
        var from = 'top';
        var align = 'center';
        /*
            $.notify({
                icon: 'notifications',
                message: 'Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer.'
        
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                }
            });  */
    };
    ProfileComponent.prototype.register = function (myForm) {
        console.log('Registration successful.');
        console.log(myForm.value);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
        this.nav.dashActive = '';
        this.nav.homeActive = '';
        this.nav.profileActive = 'active';
        this.nav.show();
        this.check = 'suck';
        //  console.log( this.profile.firstName);
    };
    ProfileComponent.prototype.setProfile = function (user) {
        this.profile = user;
        var myObjStr = JSON.stringify(user);
        console.log(this.profile.firstName);
    };
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        var userLogin = JSON.parse(localStorage.getItem('currentUser')); // a javascript object
        console.log(userLogin.username);
        this.userService.getAll()
            .subscribe(function (users) {
            _this.users = users;
            // this.userDataSource.data = users;
        });
        this.userService.getByLogin(userLogin.username).subscribe(function (data) {
            _this.setProfile(data);
        });
        console.log(this.profile);
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        //    let userOperation: Observable<User[]>;
        //  userOperation =
        this.userService.update(this.profile).subscribe(function (suck) {
            _this.profile = suck;
            // this.userDataSource.data = users;
        });
        //  this.alertService.success('Profile Updated', false);
        this.toastr.success('Profile Saved Successful', 'Profile Update', {
            timeOut: 2000,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgForm */])
    ], ProfileComponent.prototype, "myForm", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__navbar_navbar_service__["a" /* NavbarService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_toastr__["b" /* ToastrService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.well{\r\n    height: 150px;\r\n  } \r\n  \r\n  .Absolute-Center {\r\n    margin: auto;\r\n    position: absolute;\r\n    top: 0; left: 0; bottom: 0; right: 0;\r\n  }\r\n  \r\n  .Absolute-Center.is-Responsive {\r\n    width: 50%; \r\n    height: 50%;\r\n    min-width: 200px;\r\n    max-width: 600px;\r\n    padding: 40px;\r\n  }\r\n\r\n  .example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n  .example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-right-align {\r\n    text-align: right;\r\n  }\r\n  \r\n  input.example-right-align::-webkit-outer-spin-button,\r\n  input.example-right-align::-webkit-inner-spin-button {\r\n    display: none;\r\n  }\r\n  \r\n  input.example-right-align {\r\n    -moz-appearance: textfield;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" style=\"margin-top:10px\">\n<div class=\"row\">\n  <div class=\"Absolute-Center is-Responsive\">\n        <div class=\"col-sm-12 col-md-12 col-md-offset-1\"> -->\n\n                <div class=\"container\" style=\"margin-top:100px\">\n                        <div class=\"row\">\n                          <div class=\"Absolute-Center is-Responsive\">\n                                <div class=\"col-sm-8 col-md-6 col-md-offset-1\">\n                                <div class=\"panel panel-default\">\n                                   \n                                    <div class=\"panel-body\">\n                                           \n\n                  <!--                        <form class=\"example-form\">\n                                            <mat-form-field class=\"example-full-width\">\n                                                    <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\">\n                                                    <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                                                      Please enter a valid email address\n                                                    </mat-error>\n                                                    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                                                      Email is <strong>required</strong>\n                                                    </mat-error>\n                                                  </mat-form-field>\n                                           </form>\n                                        -->\n                                        \n\n  <h2>Register</h2>\n  <form [formGroup]=\"complexForm\" (ngSubmit)=\"register(complexForm.value)\">\n    <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['firstName'].valid && complexForm.controls['firstName'].touched}\">\n      <label>First Name:</label>\n      <input class=\"form-control\" type=\"text\" placeholder=\"John\" [formControl]=\"complexForm.controls['firstName']\">\n      <div *ngIf=\"complexForm.controls['firstName'].hasError('required') && complexForm.controls['firstName'].touched\" class=\"alert alert-danger\">You must include a first name.</div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['lastName'].valid && complexForm.controls['lastName'].touched}\">\n      <label>Last Name</label>\n      <input class=\"form-control\" type=\"text\" placeholder=\"Doe\" [formControl]=\"complexForm.controls['lastName']\">\n      <div *ngIf=\"complexForm.controls['lastName'].hasError('required') && complexForm.controls['lastName'].touched\" class=\"alert alert-danger\">You must include a last name.</div>\n    </div>\n\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['loginId'].valid && complexForm.controls['loginId'].touched}\">\n            <label>Login Id</label>\n            <input class=\"form-control\" type=\"loginId\" placeholder=\"jdoe@flsheriffs.org\" [formControl]=\"complexForm.controls['loginId']\">\n            <div *ngIf=\"complexForm.controls['loginId'].hasError('required') && complexForm.controls['loginId'].touched\" class=\"alert alert-danger\">You must include a Login Id.</div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['password'].valid && complexForm.controls['password'].touched}\">\n            <label>Password</label>\n            <input class=\"form-control\" type=\"password\" placeholder=\"***********\" [formControl]=\"complexForm.controls['password']\">\n            <div *ngIf=\"complexForm.controls['password'].hasError('required') && complexForm.controls['password'].touched\" class=\"alert alert-danger\">You must include a password.</div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['phoneMobile'].valid && complexForm.controls['phoneMobile'].touched}\">\n            <label>Phone</label>\n            <input class=\"form-control\" type=\"tel\" placeholder=\"(850) 867-5309\" [formControl]=\"complexForm.controls['phoneMobile']\">\n            <div *ngIf=\"complexForm.controls['phoneMobile'].hasError('required') && complexForm.controls['phoneMobile'].touched\" class=\"alert alert-danger\">You must include a phone number.</div>\n    </div>\n\n    <div class=\"form-group\">\n            <button type=\"submit\" [disabled]=\"!complexForm.valid\" class=\"btn btn-primary\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n    </div>\n  </form>\n\n\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    function RegisterComponent(iconRegistry, sanitizer, router, userService, alertService, fb) {
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.fb = fb;
        this.model = {};
        this.loading = false;
        this.hide = true;
        this.complexForm = fb.group({
            'firstName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            'lastName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            'loginId': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(2)])],
            'phoneMobile': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* Validators */].maxLength(10)])]
        });
    }
    RegisterComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (value) {
        var _this = this;
        this.loading = true;
        this.userService.create(value)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_alert__ = __webpack_require__("../../../../../src/app/model/alert.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["b" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__model_alert__["a" /* AlertType */].Success, message, keepAfterRouteChange);
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__model_alert__["a" /* AlertType */].Error, message, keepAfterRouteChange);
    };
    AlertService.prototype.info = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__model_alert__["a" /* AlertType */].Info, message, keepAfterRouteChange);
    };
    AlertService.prototype.warn = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.alert(__WEBPACK_IMPORTED_MODULE_3__model_alert__["a" /* AlertType */].Warning, message, keepAfterRouteChange);
    };
    AlertService.prototype.alert = function (type, message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterNavigationChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    };
    AlertService.prototype.clear = function () {
        // clear alerts
        this.subject.next();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=UTF-8');
        headers.append('Cache-Control', 'no-cache');
        var body = JSON.stringify({ loginId: username, password: password });
        return this.http.post('http://localhost:3000/authenticate', body, { headers: headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            var loginId = response.json() && response.json().loginId;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var url = 'http://localhost:3000/messages';
var MessageService = (function () {
    function MessageService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    MessageService.prototype.closeThread = function (message) {
        return this.http.post(url + '/closethread', message, this.jwt()).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    MessageService.prototype.sendMessage = function (message) {
        return this.http.post(url + '/sendmessage', message, this.jwt()).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    MessageService.prototype.getAll = function () {
        return this.http.get(url, this.jwt()).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    MessageService.prototype.getById = function (id) {
        return this.http.get(url + id, this.jwt()).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    MessageService.prototype.handleError = function (error) {
        console.error('messageService::handleError' + error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error);
    };
    MessageService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            //    const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': currentUser.token, 'x-access-token': currentUser.token });
            console.log(headers);
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var url = 'http://localhost:3000/api/user/';
var UserService = (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    UserService.prototype.create = function (user) {
        return this.http.post(url, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getByLogin = function (loginId) {
        return this.http.get(url + loginId, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(url + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.update = function (user) {
        var fug = url + user.loginId;
        //   const once = this.http.put(fug, JSON.stringify(user), this.jwt())
        //   .map(() => user);
        //   const dog =  this.http.put(fug, user, this.jwt()).map((response: Response) => response.json());
        //   return dog;
        return this.http.put(fug, user, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(url + id, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.getAll = function () {
        return this.http.get(url, this.jwt()).map(function (response) { return response.json(); });
    };
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            //    const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        }
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n    <div class=\"row\">\n     <nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\n        <ul class=\"nav nav-pills flex-column\">\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/message']\"  class=\"nav-link \" href=\"#\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>&nbsp; Messages</a>\n          </li>\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/dash']\" class=\"nav-link\" href=\"#\"><i class=\"fa fa-line-chart\" aria-hidden=\"true\"></i>&nbsp;Reports</a>\n          </li>\n          <li class=\"nav-item\">\n            <a [routerLink]=\"['/user']\"  class=\"nav-link  active \" href=\"#\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i>&nbsp; Users</a>\n          </li>\n        </ul>\n\n      </nav>   \n\n      <main class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n        <h1></h1>\n\n       \n\n        <mat-toolbar>\n            <span>Users</span>\n        </mat-toolbar>\n        <app-userlist></app-userlist>\n        \n       \n     <!--   <app-message-detail></app-message-detail>  -->\n      \n\n    \n  \n\n       \n\n       \n\n    \n      </main>\n    </div>\n  </div>  "

/***/ }),

/***/ "../../../../../src/app/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Base structure\r\n */\n/* Move down content because we have a fixed navbar that is 50px tall */\nbody {\n  padding-top: 50px; }\n\n/*\r\n   * Typography\r\n   */\nh1 {\n  margin-top: 21px;\n  margin-bottom: 21px;\n  padding-bottom: 9px;\n  border-bottom: 1px solid #eee; }\n\n/*\r\n   * Sidebar\r\n   */\n.sidebar {\n  position: fixed;\n  top: 51px;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  padding: 20px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  /* Scrollable contents if viewport is shorter than content. */\n  border-right: 1px solid #eee; }\n\n/* Sidebar navigation */\n.sidebar {\n  padding-left: 0;\n  padding-right: 0; }\n\n.sidebar .nav {\n  margin-bottom: 20px; }\n\n.sidebar .nav-item {\n  width: 100%; }\n\n.sidebar .nav-item + .nav-item {\n  margin-left: 0; }\n\n.sidebar .nav-link {\n  border-radius: 0; }\n\n/*\r\n   * Dashboard\r\n   */\n/* Placeholders */\n.placeholders {\n  padding-bottom: 3rem; }\n\n.placeholder img {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem; }\n\n.nav-pills .nav-link.active, .nav-pills .nav-item.show .nav-link {\n  color: #fff;\n  cursor: default;\n  background-color: #27880d !important; }\n\na {\n  color: #27880d;\n  text-decoration: none; }\n\n.bg-faded {\n  background-color: #000000 white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar_navbar_service__ = __webpack_require__("../../../../../src/app/navbar/navbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(nav) {
        this.nav = nav;
        this.users = [];
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__navbar_navbar_service__["a" /* NavbarService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/userlist/userlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    \n        <div class=\"example-header\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyUserFilter($event.target.value)\" placeholder=\"Filter\">\n          </mat-form-field>\n        </div>\n      \n        <mat-table #table [dataSource]=\"userDataSource\" matSort>\n      \n          <ng-container matColumnDef=\"firstName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> First Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.firstName}} </mat-cell>\n          </ng-container>\n      \n          <ng-container matColumnDef=\"lastName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.lastName}} </mat-cell>\n          </ng-container>\n  \n          <ng-container matColumnDef=\"loginId\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Login Id</mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.loginId}} </mat-cell>\n          </ng-container>\n      \n         <ng-container matColumnDef=\"createdTime\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Created </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">{{ row.createdTime | date }}</mat-cell>\n          </ng-container>  \n          \n          <ng-container matColumnDef=\"edit\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Edit </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\">\n                  <button (click)=\"onSelect(row)\" class=\"btn btn-primary btn-simple btn-xs\" rel=\"tooltip\" title=\"Edit User\" type=\"button\">\n                    <i  class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                  </button>\n              </mat-cell>\n          </ng-container>\n          \n    <!--      <button mat-button ><i  class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button>\n          <button (click)=\"onSelect(row)\" class=\"btn btn-primary btn-simple btn-xs\" rel=\"tooltip\" title=\"Edit User\" type=\"button\">\n              <i  class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n              </button>\n          \n          <ng-container matColumnDef=\"delete\">\n              <mat-header-cell *matHeaderCellDef > Delete </mat-header-cell>\n              <mat-cell> <i (click)=\"onSelect(row)\" class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i> </mat-cell>  \n            </ng-container>  -->\n\n            <ng-container matColumnDef=\"actionsColumn\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Edit &nbsp; &nbsp; Delete</mat-header-cell>\n             \n              <mat-cell *matCellDef=\"let row\">\n                <button *ngIf=\"!row.editing\" mat-icon-button color=\"primary\" focusable=\"false\" (click)=\"onSelect(row)\">\n                      <i class=\"fa fa-pencil mat-icon\"></i>\n                    </button>\n                    <button  *ngIf=\"!row.editing\" mat-icon-button color=\"primary\" focusable=\"false\" (click)=\"closeThread(row)\">\n                        <i class=\"fa fa-times mat-icon\"></i>\n                      </button> \n                <button   *ngIf=\"row.editing\" mat-icon-button color=\"primary\" focusable=\"false\" (click)=\"row.confirmEditCreate()\">\n                      <i class=\"fa fa-check mat-icon\"></i>  \n                    </button>  \n                    \n                \n              </mat-cell>\n            </ng-container>\n            \n\n           \n      \n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        </mat-table>\n      \n    </div>  \n\n    <div *ngIf=\"selectedUser\">\n        {{selectedUser.firstName}} {{selectedUser.lastName}} {{selectedUser.loginId}} {{selectedUser.city}} {{selectedUser.state}}\n\n     </div>"

/***/ }),

/***/ "../../../../../src/app/user/userlist/userlist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/userlist/userlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserlistComponent = (function () {
    function UserlistComponent(userService) {
        this.userService = userService;
        this.displayedColumns = ['firstName', 'lastName', 'loginId', 'createdTime', 'actionsColumn'];
        this.userDataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatTableDataSource */]();
        this.users = [];
    }
    UserlistComponent.prototype.ngAfterViewInit = function () {
        this.userDataSource.sort = this.sort;
    };
    UserlistComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
    };
    UserlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll()
            .subscribe(function (dogFace) {
            _this.users = dogFace;
            _this.userDataSource.data = dogFace;
        });
    };
    UserlistComponent.prototype.applyUserFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.userDataSource.filter = filterValue;
    };
    UserlistComponent.prototype.updateUser = function () {
        this.userService.update(this.selectedUser);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatSort */])
    ], UserlistComponent.prototype, "sort", void 0);
    UserlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-userlist',
            template: __webpack_require__("../../../../../src/app/user/userlist/userlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/userlist/userlist.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], UserlistComponent);
    return UserlistComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map