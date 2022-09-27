import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl: string = environment.apiUrl + environment.version;

  constructor(private http: HttpClient, private util: UtilService) { }

  getData(data) {
    return this.http.post(`${this.baseUrl}dashboard/getdata`, data).pipe(
      catchError(this.util.handleError('dashboardData', []))
    );
  }

  getStatisticsData(data) {
    return this.http.post(`${this.baseUrl}dashboard/v2/getData`, data).pipe(
      catchError(this.util.handleError('statsData', []))
    );
  }

  getTDS() {
    return this.http.get(`${this.baseUrl}dashboard/v2/get/tds`).pipe(
      catchError(this.util.handleError('getTDS', []))
    );
  }
  getTableTransaction(data) {
    return this.http.post(`${this.baseUrl}dashboard/v2/getTableTransaction`, data).pipe(
      catchError(this.util.handleError('transactionData', []))
    );
  }
  getTournamentTransation(data) {
    return this.http.get(`${this.baseUrl}dashboard/v2/tournament/stats`, data).pipe(
      catchError(this.util.handleError('TournamentTransactionData', []))
    );
  }

  userCounting() {
    return this.http.get
      (`${this.baseUrl}dashboard/userscount`);
  }

  aDepositStat() {
    return this.http.get
      (`${this.baseUrl}dashboard/depositcount`);
  }

  aOverallDeposit() {
    return this.http.get
      (`${this.baseUrl}dashboard/depositoverall`);

  }

  withdrawalCounting() {
    return this.http.get
      (`${this.baseUrl}dashboard/userswithdrawal`);
  }

  gameCount() {
    return this.http.get
      (`${this.baseUrl}dashboard/gamecount`);
  }

  revenue() {
    return this.http.post
      (`${this.baseUrl}dashboard/revenue`, {});
  }

  botRevenue() {
    return this.http.get
      (`${this.baseUrl}dashboard/botRevenue`);

  }

  UserBalance() {
    return this.http.get
      (`${this.baseUrl}dashboard/getUserBalance`);
  }
}
