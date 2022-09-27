import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class MasterCardService {

  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listmasterCard(params) {
    return this.http
      .get(`${this.baseUrl}/masterCard/list`, { params })
      .pipe(catchError(this.util.handleError("masterCard", [])));
    // }
  }
  deletemasterCard(params) {
    return this.http
      .delete(`${this.baseUrl}/masterCard/delete`, { params })
      .pipe(catchError(this.util.handleError("masterCard", [])));
  }
  editmasterCard(body) {
    return this.http
      .post(`${this.baseUrl}/masterCard/add`, body)
      .pipe(catchError(this.util.handleError("masterCard", [])));
  }
  addmasterCard(body) {
    return this.http
      .post(`${this.baseUrl}/masterCard/add`, body)
      .pipe(catchError(this.util.handleError("masterCard", [])));
  }
  getmasterCard(params) {
    return this.http
      .get(`${this.baseUrl}/masterCard/get`, { params })
      .pipe(catchError(this.util.handleError("masterCard", [])));
  }
}
