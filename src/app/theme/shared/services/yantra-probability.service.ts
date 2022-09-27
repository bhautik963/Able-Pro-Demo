import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
import { error } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class YantraProbabilityService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listyantra(params) {
    return this.http
      .get(`${this.baseUrl}/yantra/probability/list`, { params })
      .pipe(catchError(this.util.handleError("yantra", [])));
    // }
  }
  deleteyantra(params) {
    return this.http
      .delete(`${this.baseUrl}/yantra/probability/delete`, { params })
      .pipe(catchError(this.util.handleError("yantra", [])));
  }
  edityantra(body) {
    return this.http
      .post(`${this.baseUrl}/yantra/probability/add`, body)
      .pipe(catchError(this.util.handleError("yantra", [])));
  }
  addyantra(body) {
    return this.http
      .post(`${this.baseUrl}/yantra/probability/add`, body)
      .pipe(catchError(this.util.handleError("yantra",[])));
  }
  getyantra(params) {
    return this.http
      .get(`${this.baseUrl}/yantra/probability/get`, { params })
      .pipe(catchError(this.util.handleError("yantra", [])));
  }
}
