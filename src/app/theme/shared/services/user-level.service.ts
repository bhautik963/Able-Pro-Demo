import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserLevelService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listUserLevel(params) {
    return this.http
      .get(`${this.baseUrl}/userLevelUpDetails/list`, { params })
      .pipe(catchError(this.util.handleError("userLevelUpDetails", [])));
    // }
  }
  deleteUserLevel(params) {
    return this.http
      .delete(`${this.baseUrl}/userLevelUpDetails/delete`, { params })
      .pipe(catchError(this.util.handleError("userLevelUpDetails", [])));
  }
  editUserLevel(body) {
    return this.http
      .post(`${this.baseUrl}/userLevelUpDetails/add`, body)
      .pipe(catchError(this.util.handleError("userLevelUpDetails", [])));
  }
  addUserLevel(body) {
    return this.http
      .post(`${this.baseUrl}/userLevelUpDetails/add`, body)
      .pipe(catchError(this.util.handleError("userLevelUpDetails", [])));
  }
  getUserLevel(params) {
    return this.http
      .get(`${this.baseUrl}/userLevelUpDetails/get`, { params })
      .pipe(catchError(this.util.handleError("userLevelUpDetails", [])));
  }
}
