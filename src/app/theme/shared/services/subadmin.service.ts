import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class SubadminService {

  // private subject = new Subject<any>();
  private baseUrl: string = environment.apiUrl

  constructor(private http: HttpClient, public router: Router, public util: UtilService) { }
  /** get Permission Data*/
  getPermissionData() {
    return this.http.get<any>('../../../assets/SubAdmin_permissions.json').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  addSubAdmin(body) {
    return this.http
      .post(`${this.baseUrl}/admin/create`, body)
      .pipe(catchError(this.util.handleError("subadmin", [])));
  }
  listRequest(params) {
    return this.http
      .get(`${this.baseUrl}/request/list`, { params })
      .pipe(catchError(this.util.handleError("resquestlist", [])));
  }
  getRequest(params) {
    return this.http
      .get(`${this.baseUrl}/request/get`, { params })
      .pipe(catchError(this.util.handleError("resquestget", [])));
  }
  approveRequest(body) {
    return this.http
      .post(`${this.baseUrl}/request/approve`, body)
      .pipe(catchError(this.util.handleError("approve", [])));
  }
  rejectRequest(body) {
    return this.http
      .post(`${this.baseUrl}/request/reject`, body)
      .pipe(catchError(this.util.handleError("reject", [])));
  }
  deleteRequest(params) {
    return this.http
      .delete(`${this.baseUrl}/request/delete`, { params })
      .pipe(catchError(this.util.handleError("reject", [])));
  }
  listSubAdmin(params) {
    return this.http
      .get(`${this.baseUrl}/admin/list`, { params })
      .pipe(catchError(this.util.handleError("subadminlist", [])));
  }
  deleteSubAdmin(params) {
    return this.http
      .delete(`${this.baseUrl}/admin/delete/`, { params })
      .pipe(catchError(this.util.handleError("subadminlist", [])));
  }
  getSubAdmin(params) {
    return this.http
      .get(`${this.baseUrl}/admin/get/`, { params })
      .pipe(catchError(this.util.handleError("subadminlist", [])));
  }



}
