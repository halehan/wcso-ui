import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Constants } from '../util/constants';

@Injectable()
export class ContentService {

  constructor( private http: Http) { }

  /*
  saveContent(message: Message) {
    return this.http.post(Constants.SERVER_URL + 'content/saveContent', message, this.jwt()).map((response: Response) =>
      response.json()).catch(this.handleError);
  }
*/

  getByKey(id: number) {
    return this.http.get(Constants.SERVER_URL + 'content' + id, this.jwt()).map((response: Response) =>
      response.json()).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('messageService::handleError' + error);
    return Observable.throw(error);
  }

  private jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
    //    const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
        const headers = new Headers({ 'Authorization': currentUser.token,  'x-access-token': currentUser.token } );
        console.log(headers);
        return new RequestOptions({ headers: headers });
    }
}

}
