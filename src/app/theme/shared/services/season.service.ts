import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listseason(params) {
    return this.http
      .get(`${this.baseUrl}/season/list`, { params })
      .pipe(catchError(this.util.handleError("season", [])));
    // }
  }
  deleteseason(params) {
    return this.http
      .delete(`${this.baseUrl}/season/delete`, { params })
      .pipe(catchError(this.util.handleError("season", [])));
  }
  editseason(body) {
    return this.http
      .post(`${this.baseUrl}/season/add`, body)
      .pipe(catchError(this.util.handleError("season", [])));
  }
  addseason(body) {
    return this.http
      .post(`${this.baseUrl}/season/add`, body)
      .pipe(catchError(this.util.handleError("season", [])));
  }
  getseason(params) {
    return this.http
      .get(`${this.baseUrl}/season/get`, { params })
      .pipe(catchError(this.util.handleError("season", [])));
  }
}