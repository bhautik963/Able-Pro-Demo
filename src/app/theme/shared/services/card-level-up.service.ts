import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CardLevelUPService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listcardLevelUp(params) {
    return this.http
      .get(`${this.baseUrl}/cards/levelUp/list`, { params })
      .pipe(catchError(this.util.handleError("cardLevelUp", [])));
    // }
  }
  deletecardLevelUp(params) {
    return this.http
      .delete(`${this.baseUrl}/cards/levelUp/delete`, { params })
      .pipe(catchError(this.util.handleError("cardLevelUp", [])));
  }
  editcardLevelUp(body) {
    return this.http
      .post(`${this.baseUrl}/cards/levelUp/add`, body)
      .pipe(catchError(this.util.handleError("cardLevelUp", [])));
  }
  addcardLevelUp(body) {
    return this.http
      .post(`${this.baseUrl}/cards/levelUp/add`, body)
      .pipe(catchError(this.util.handleError("cardLevelUp", [])));
  }
  getcardLevelUp(params) {
    return this.http
      .get(`${this.baseUrl}/cards/levelUp/get`, { params })
      .pipe(catchError(this.util.handleError("cardLevelUp", [])));
  }
}
