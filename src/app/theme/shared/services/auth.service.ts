
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';

import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  private url: string;
  protected loggedIn = false;
  private baseUrl: string = environment.apiUrl;
  private agentUrl: string = environment.apiUrl + environment.aVersion;
  constructor(private util: UtilService, private http: HttpClient, private router: Router) { }

  isAuthenticated(): boolean {
    const storageValues = JSON.parse(localStorage.getItem('accessToken'));
    if (storageValues !== null && storageValues !== '') {
      return true;
    }
    else {
      return false;
    }

    // return moment().isBefore(moment.unix(this.storageValues.exp));
  }


  isLoggedIn(url: string): boolean {
    if (localStorage.getItem('accessToken')) {
      if (url === '/' || url === '/auth/sign-in' || url === '/auth/forgot-password' || url === '/auth/reset-password') {
        this.router.navigate(['/components/crm/dashboard']);

        return false;
      } else {
        return true;
      }
    } else {
      if (url !== '/auth/sign-in' && url !== '/auth/forgot-password') {
        if (url === '/auth/forgot-password') {
          this.router.navigate(['/auth/forgot-password']);
        } else {
          this.router.navigate(['/auth/sign-in']);
        }
        return false;
      } else {
        return true;
      }
    }

  }
  isAgentLoggedIn(url: string): boolean {
    const storageValues = JSON.parse(localStorage.getItem('agentToken'));
    if (storageValues !== null && storageValues !== '') {
      if (url === '/agent' || url === '/agent/login') {
        this.router.navigate(['/agent/agentauth']);

        return false;
      } else {
        return true;
      }
    }
    else {
      if (url !== '/agent/login') {
        if (url === '/auth/forgot-password') {
          this.router.navigate(['/auth/forgot-password']);
        } else {
          this.router.navigate(['/agent/login']);
        }
        return false;
      } else {
        return true;
      }
    }

  }

  login(data) {
    
    
    return this.http.post<any>(`${this.baseUrl}/login`, data, { observe: 'response' as 'body' });
  }
  agentLogin(data) {
    
    return this.http.post<any>(`${this.agentUrl}agent/auth/login`, data, { observe: 'response' as 'body' });
  }

  forgotPassword(data) {
    return this.http.post<any>(`${this.baseUrl}auth/password/forgot`, data).pipe(
      map(user => user),
      catchError(this.util.handleError('forgotPassword', []))

    );
  }

  resetPassword(data, token) {
    return this.http.post<any>(`${this.baseUrl}auth/password/reset/${token}`, data).pipe(
      map(user => user),
      catchError(this.util.handleError('resetPassword', []))

    );
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('admintype');
    this.router.navigate(['/auth/sign-in']);
  }

  logoutAgent() {
    localStorage.removeItem('agentToken');
    localStorage.removeItem('admintype');
    this.router.navigate(['/agent/login']);
  }


}
