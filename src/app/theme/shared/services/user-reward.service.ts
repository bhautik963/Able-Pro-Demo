import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserRewardService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listUserReward(params) {
    return this.http
      .get(`${this.baseUrl}/user/reward/list`, { params })
      .pipe(catchError(this.util.handleError("user/reward", [])));
    // }
  }
  deleteUserReward(params) {
    return this.http
      .delete(`${this.baseUrl}/user/reward/delete`, { params })
      .pipe(catchError(this.util.handleError("user/reward", [])));
  }
  editUserReward(body) {
    return this.http
      .post(`${this.baseUrl}/user/reward/add`, body)
      .pipe(catchError(this.util.handleError("user/reward", [])));
  }
  addUserReward(body) {
    return this.http
      .post(`${this.baseUrl}/user/reward/add`, body)
      .pipe(catchError(this.util.handleError("user/reward", [])));
  }

  getUserReward(params) {
    return this.http
      .get(`${this.baseUrl}/user/reward/get`, { params })
      .pipe(catchError(this.util.handleError("user/reward", [])));
  }
}
