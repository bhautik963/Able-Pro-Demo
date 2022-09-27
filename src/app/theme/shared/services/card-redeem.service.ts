import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CardRedeemService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listcodeRedeem(params) {
    return this.http
      .get(`${this.baseUrl}/codeRedeem/list`, { params })
      .pipe(catchError(this.util.handleError("codeRedeem", [])));
    // }
  }
  deletecodeRedeem(params) {
    return this.http
      .delete(`${this.baseUrl}/codeRedeem/delete`, { params })
      .pipe(catchError(this.util.handleError("codeRedeem", [])));
  }
  editcodeRedeem(body) {
    return this.http
      .post(`${this.baseUrl}/codeRedeem/add`, body)
      .pipe(catchError(this.util.handleError("codeRedeem", [])));
  }
  addcodeRedeem(body) {
    return this.http
      .post(`${this.baseUrl}/codeRedeem/add`, body)
      .pipe(catchError(this.util.handleError("codeRedeem", [])));
  }
  getcodeRedeem(params) {
    return this.http
      .get(`${this.baseUrl}/codeRedeem/get`, { params })
      .pipe(catchError(this.util.handleError("codeRedeem", [])));
  }
}
