import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DefaultService {
  url = environment.base_url;
  constructor(private http: HttpClient) { }
  [x: string]: any;

  getAmountandcount(id): Observable<any> {
    return this.http.get(this.url + '/gst-app/' + id).pipe(catchError(this.handleError));
  }

}