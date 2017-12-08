import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './index';
import { User } from '../model/index';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
   //     getUsers(): Observable<Array<any>> {
        // add authorization header with jwt token
       const headers = new Headers({ 'authorization':  this.authenticationService.token });
     //   let headers = new Headers({ 'x-access-token':  this.authenticationService.token });
        const options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://localhost:3000/api/user', options)
            .map((response: Response) => response.json());

    }

}
