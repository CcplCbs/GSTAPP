import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class DetailService {
    url = environment.base_url;

    constructor(private http: HttpClient) { }
    [x: string]: any;

    getAccountDetail(obj): Observable<any> {
        return this.http.post(this.url + '/gst-app/getAcDetail', obj).pipe(catchError(this.handleError));
    }

    getstatement(obj): Observable<any> {
        return this.http.post(this.url + '/gst-app/ledgerView', obj).pipe(catchError(this.handleError));
    }
    userLogin(obj): Observable<any> {
        return this.http.post(this.url + '/gst-app/login', obj).pipe(catchError(this.handleError));
    }
    logOut(obj): Observable<any> {
        return this.http.post(this.url + '/gst-app/logout', obj).pipe(catchError(this.handleError));
    }

   
}