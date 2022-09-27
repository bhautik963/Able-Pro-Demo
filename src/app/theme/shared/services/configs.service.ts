import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ConfigsService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  getconfig(params) {
    return this.http
      .get(`${this.baseUrl}/configs/get`, { params })
      .pipe(catchError(this.util.handleError("config", [])));
  }


  editconfig(body) {
    return this.http
      .post(`${this.baseUrl}/configs/update`, body)
      .pipe(catchError(this.util.handleError("config", [])));
  }
}