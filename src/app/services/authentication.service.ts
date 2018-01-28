import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Constants } from '../util/constants';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        const headers = new Headers();

        headers.append('Content-Type', 'application/json; charset=UTF-8');
        headers.append('Cache-Control', 'no-cache');

        const body = JSON.stringify({ loginId: username, password: password })
        return this.http.post( Constants.SERVER_URL  + 'authenticate', body, { headers: headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const token = response.json() && response.json().token;
                const loginId = response.json() && response.json().loginId;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}