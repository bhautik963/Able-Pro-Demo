import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private util: UtilService) { }

  listUsers(data) {
    const options: any = {
      params: data
    };
    return this.http.get(`${this.baseUrl}/user/list`, options).pipe(
      map((response: any) => {
        if (data.isCSV) {
          return window.open(response.data);
        }
        return response;
      }),
      catchError(this.util.handleError('listUsers', []))
    );
  }

  addUser(data) {
    return this.http.post(`${this.baseUrl}/user/update`, data).pipe(
      catchError(this.util.handleError('createUser', []))
    );
  }

  viewUser(params) {
    return this.http.get(`${this.baseUrl}/user/get/`, { params }).pipe(
      catchError(this.util.handleError('viewUser', []))
    );
  }

  editUser(id, data) {
    return this.http.put(`${this.baseUrl}user/edit/${id}`, data).pipe(
      catchError(this.util.handleError('editUser', []))
    );
  }

  editAddress(id, data) {
    return this.http.post(`${this.baseUrl}user/address/edit/${id}`, data).pipe(
      catchError(this.util.handleError('editUser', []))
    );
  }
  updateChips(data) {
    return this.http.post(`${this.baseUrl}user/reloadChips`, data).pipe(
      catchError(this.util.handleError('updateChips', []))
    );
  }

  deleteUser(params) {
    return this.http.delete(`${this.baseUrl}/user/delete/`, { params }).pipe(
      catchError(this.util.handleError('deleteUser', []))
    );
  }

  deleteBulkUser(data) {
    return this.http.post(`${this.baseUrl}user/delete/bulk`, data).pipe(
      catchError(this.util.handleError('deleteBulkUser', []))
    );
  }

  kycUpload(data) {
    return this.http.post(`${this.baseUrl}user/kyc`, data)
  }

  kycList(params) {
    return this.http.get(`${this.baseUrl}user/kyc/List`, { params }).pipe(
      catchError(this.util.handleError('kycList', []))
    );
  }

  kycView(id) {
    return this.http.get(`${this.baseUrl}user/kyc/view/${id}`).pipe(
      catchError(this.util.handleError('kycList', []))
    );
  }

  kycVerify(id, data) {
    return this.http.put(`${this.baseUrl}user/kyc/verify/${id}`, data).pipe(
      catchError(this.util.handleError('kycVerify', []))
    );
  }

  addBank(data) {
    return this.http.post(`${this.baseUrl}user/bank`, data).pipe(
      catchError(this.util.handleError('addBank', []))
    );
  }

  transactionList(params) {
    return this.http.get(`${this.baseUrl}user/transactions/List`, { params }).pipe(
      catchError(this.util.handleError('transactionList', []))
    );
  }

  operationList(params) {
    return this.http.get(`${this.baseUrl}user/operations/List`, { params }).pipe(
      catchError(this.util.handleError('operationList', []))
    );
  }

  gameList(params) {
    return this.http.get(`${this.baseUrl}user/games/list`, { params }).pipe(
      catchError(this.util.handleError('gameList', []))
    );
  }
  tournamentList(params) {
    return this.http.get(`${this.baseUrl}user/tournament/games`, { params }).pipe(
      catchError(this.util.handleError('tournamentList', []))
    );
  }

}


