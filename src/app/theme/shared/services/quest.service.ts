import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class QuestService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listquest(params) {
    return this.http
      .get(`${this.baseUrl}/quest/list`, { params })
      .pipe(catchError(this.util.handleError("quest", [])));
    // }
  }
  deletequest(params) {
    return this.http
      .delete(`${this.baseUrl}/quest/delete`, { params })
      .pipe(catchError(this.util.handleError("quest", [])));
  }
  editquest(body) {
    return this.http
      .post(`${this.baseUrl}/quest/add`, body)
      .pipe(catchError(this.util.handleError("quest", [])));
  }
  addquest(body) {
    return this.http
      .post(`${this.baseUrl}/quest/add`, body)
      .pipe(catchError(this.util.handleError("quest", [])));
  }
  getquest(params) {
    return this.http
      .get(`${this.baseUrl}/quest/get`, { params })
      .pipe(catchError(this.util.handleError("quest", [])));
  }
}
