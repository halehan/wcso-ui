import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentication.service';
import { Message } from '../model/index';

@Injectable()
export class MessageService {

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {
}

getMessages(): Observable<Message[]> {
       // add authorization header with jwt token
      const headers = new Headers({ 'authorization':  this.authenticationService.token });
      const options = new RequestOptions({ headers: headers });

       // get messages from api
       return this.http.get('http://localhost:3000/messages', options)
           .map((response: Response) => response.json());

   }

}
