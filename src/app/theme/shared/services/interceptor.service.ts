import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(public util: UtilService, public router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem('accessToken') != null) {
      const storageValues = JSON.parse(localStorage.getItem('accessToken'));
      request = request.clone({
        setHeaders: {
          Authorization: storageValues.Authorization
        }
      });
      return next.handle(request).pipe(
        catchError(err => {
          const errorCodes = [423, 404, 403, 406, 417, 419, 400, 409, 0]
          if (err.status === 401) {
            localStorage.clear();
            this.router.navigate(['/auth/sign-in']);
          }
          return throwError(err);
        }));
    }
    else if(localStorage.getItem('agentToken') != null){
      const storageValues = JSON.parse(localStorage.getItem('agentToken'));
      request = request.clone({
        setHeaders: {
          Authorization: storageValues.Authorization
        }
      });
      return next.handle(request).pipe(
        catchError(err => {
          const errorCodes = [423, 404, 403, 406, 417, 419, 400, 409, 0]
          if (err.status === 401) {
            localStorage.clear();
            this.router.navigate(['/agent/login']);
          }
          return throwError(err);
        }));
    }
    return next.handle(request).pipe(
      catchError(err => {
        const errorCodes = [423, 404, 403, 406, 417, 419, 400, 409, 0]
        if (err.status === 401) {
          localStorage.clear();
          // this.router.navigate(['/agent/login']);
        }
        return throwError(err);
      }));
   
  }

  errorMsg(errData) {
    this.util.notifyError(errData.error.message);
  }


}
