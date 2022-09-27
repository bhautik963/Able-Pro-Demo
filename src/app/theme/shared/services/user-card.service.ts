import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserCardService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listusercard(params) {
    return this.http
      .get(`${this.baseUrl}/user/card/list`, { params })
      .pipe(catchError(this.util.handleError("usercard", [])));
    // }
  }
  deleteusercard(params) {
    return this.http
      .delete(`${this.baseUrl}/user/card/delete`, { params })
      .pipe(catchError(this.util.handleError("usercard", [])));
  }
  editusercard(body) {
    return this.http
      .post(`${this.baseUrl}/user/card/add`, body)
      .pipe(catchError(this.util.handleError("usercard", [])));
  }
  addusercard(body) {
    return this.http
      .post(`${this.baseUrl}/user/card/add`, body)
      .pipe(catchError(this.util.handleError("usercard",[])));
  }
  getusercard(params) {
    return this.http
      .get(`${this.baseUrl}/user/card/get`, { params })
      .pipe(catchError(this.util.handleError("usercard", [])));
  }
}
