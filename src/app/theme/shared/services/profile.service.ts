import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { from, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // private subject = new Subject<any>();
  private baseUrl: string = environment.apiUrl + environment.version;

  constructor(private http: HttpClient, public router: Router, public util: UtilService) { }

  getProfile() {
    return this.http.get(`${this.baseUrl}profile`).pipe(
      catchError(this.util.handleError('getProfile', []))
    );
  }

  updateProfile(data) {
    return this.http.post(`${this.baseUrl}profile/edit`, data).pipe(
      catchError(this.util.handleError('editProfile', []))
    );
  }

  // getProfilePic(): Observable<any> {
  //   return this..asObservable();
  // }

  changeEmail(data) {
    return this.http.post
      (`${this.baseUrl}profile/update/email`, data).pipe(
        catchError(this.util.handleError('changeEmail', []))
      );
  }

  changePassword(data) {
    // http://3.7.98.19:5002/api/v1/auth/changePassword
    return this.http.post
      (`${this.baseUrl}profile/update/password`, data)
  }

  changeMobile(data) {
    // (`${this.baseUrl}profile/update/mobile`, data).pipe(
    return this.http.post
      (`${this.baseUrl}profile/update/mobile`, data).pipe(
        catchError(this.util.handleError('changeMobile', []))
      );
  }

  verifyOTP(data) {
    return this.http.post
      (`${this.baseUrl}profile/otp/verify`, data).pipe(
        catchError(this.util.handleError('verifyOTP', []))
      );
  }

  logout() {
    return this.http.get
      (`${this.baseUrl}profile/logout`).pipe(
        tap(() => localStorage.clear()),
        tap(() => this.router.navigate(['/auth/sign-in'])),
        catchError(this.util.handleError('logout', []))
      );
  }


  private handleError<T>(operation = 'operation', result?: any) {
    return (error: any): Observable<any> => {
      this.util.notifyError(error);
      return from(result);
    };
  }
}
