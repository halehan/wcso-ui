import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';
import { User } from '../model/index';

const url = 'http://localhost:3000/api/user';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    create(user: User) {
        return this.http.post(url, user, this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get(url + id, this.jwt()).map((response: Response) => response.json());
    }

 /*   update(user: User) {
        return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    } */

    delete(id: number) {
        return this.http.delete(url + id, this.jwt()).map((response: Response) => response.json());
    }

    getAll(): Observable<User[]> {
        return this.http.get(url, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
        //    const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            const headers = new Headers({ 'Authorization': currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

}
