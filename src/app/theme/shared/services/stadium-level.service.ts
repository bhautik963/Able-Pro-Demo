import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class StadiumLevelService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listStadiumLevel(params) {
    return this.http
      .get(`${this.baseUrl}/stadium/list`, { params })
      .pipe(catchError(this.util.handleError("Stadium", [])));
    // }
  }
  deleteStadiumLevel(params) {
    return this.http
      .delete(`${this.baseUrl}/stadium/delete`, { params })
      .pipe(catchError(this.util.handleError("kathika", [])));
  }
  editStadiumLevel(body) {
    return this.http
      .post(`${this.baseUrl}/stadium/add`, body)
      .pipe(catchError(this.util.handleError("kathika", [])));
  }
  addStadiumLevel(body) {
    return this.http
      .post(`${this.baseUrl}/stadium/add`, body)
      .pipe(catchError(this.util.handleError("kathika", [])));
  }
  getStadiumLevel(params) {
    return this.http
      .get(`${this.baseUrl}/stadium/get`, { params })
      .pipe(catchError(this.util.handleError("kathika", [])));
  }
}
