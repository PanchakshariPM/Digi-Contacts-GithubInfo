import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const endpointAddress = 'http://localhost:8080/api/contacts';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  getContacts() {
    return this.http
      .get(endpointAddress, {})
      .pipe(map(this.extractData), catchError(this.handleError<any>('getContacts')));
  }

  viewContact(projectId) {
    // var request = { _id: projectId };
    return this.http
      // .get(endpointAddress, request, httpOptions)
      .get(endpointAddress)
      .pipe(map(this.extractData), catchError(this.handleError<any>('viewContact')))
  }

  createContact(createContactRequest) {
    var request = createContactRequest;
    return this.http
      .post(endpointAddress, request, httpOptions)
      .pipe(map(this.extractData), catchError(this.handleError<any>('createContact')));
  }

  getGitUserDetails() {
    // var userName = ''
    return this.http
      .get('https://api.github.com/users/', {})
      .pipe(map(this.extractData), catchError(this.handleError<any>('getGitUserDetails')));
  }

  // Error handler block
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
