import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BagesService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listbages(params) {
    return this.http
      .get(`${this.baseUrl}/badge/list`, { params })
      .pipe(catchError(this.util.handleError("bages", [])));
    // }
  }
  deletebages(params) {
    return this.http
      .delete(`${this.baseUrl}/badge/delete`, { params })
      .pipe(catchError(this.util.handleError("bages", [])));
  }
  editbages(body) {
    return this.http
      .post(`${this.baseUrl}/badge/add`, body)
      .pipe(catchError(this.util.handleError("bages", [])));
  }
  addbages(body) {
    return this.http
      .post(`${this.baseUrl}/badge/add`, body)
      .pipe(catchError(this.util.handleError("bages", [])));
  }
  getbages(params) {
    return this.http
      .get(`${this.baseUrl}/badge/get`, { params })
      .pipe(catchError(this.util.handleError("bages", [])));
  }
}
