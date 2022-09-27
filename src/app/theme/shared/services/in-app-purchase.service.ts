import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class InAppPurchaseService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listGold(params) {
    return this.http
      .get(`${this.baseUrl}/inventory/gold/list`, { params })
      .pipe(catchError(this.util.handleError("Gold", [])));
    // }
  }
  deleteGold(params) {
    return this.http
      .delete(`${this.baseUrl}/inventory/gold/delete`, { params })
      .pipe(catchError(this.util.handleError("Gold", [])));
  }
  editGold(body) {
    return this.http
      .post(`${this.baseUrl}/inventory/gold/add`, body)
      .pipe(catchError(this.util.handleError("Gold", [])));
  }
  addGold(body) {
    return this.http
      .post(`${this.baseUrl}/inventory/gold/add`, body)
      .pipe(catchError(this.util.handleError("Gold", [])));
  }
  getGold(params) {
    return this.http
      .get(`${this.baseUrl}/inventory/gold/get`, { params })
      .pipe(catchError(this.util.handleError("Gold", [])));
  }
  listgems(params) {
    return this.http
      .get(`${this.baseUrl}/inventory/gems/list`, { params })
      .pipe(catchError(this.util.handleError("gems", [])));
    // }
  }
  deletegems(params) {
    return this.http
      .delete(`${this.baseUrl}/inventory/gems/delete`, { params })
      .pipe(catchError(this.util.handleError("gems", [])));
  }
  editgems(body) {
    return this.http
      .post(`${this.baseUrl}/inventory/gems/add`, body)
      .pipe(catchError(this.util.handleError("gems", [])));
  }
  addgems(body) {
    return this.http
      .post(`${this.baseUrl}/inventory/gems/add`, body)
      .pipe(catchError(this.util.handleError("gems", [])));
  }
  getgems(params) {
    return this.http
      .get(`${this.baseUrl}/inventory/gems/get`, { params })
      .pipe(catchError(this.util.handleError("gems", [])));
  }
  listYantra(params) {
    return this.http
      .get(`${this.baseUrl}/inventory/yantra/list`, { params })
      .pipe(catchError(this.util.handleError("yantra", [])));
    // }
  }
  deleteYantra(params) {
    return this.http
      .delete(`${this.baseUrl}/inventory/yantra/delete`, { params })
      .pipe(catchError(this.util.handleError("yantra", [])));
  }
  editYantra(body) {
    return this.http
      .post(`${this.baseUrl}/inventory/yantra/add`, body)
      .pipe(catchError(this.util.handleError("yantra", [])));
  }
  addYantra(body) {
    return this.http
      .post(`${this.baseUrl}/inventory/yantra/add`, body)
      .pipe(catchError(this.util.handleError("yantra", [])));
  }
  getYantra(params) {
    return this.http
      .get(`${this.baseUrl}/inventory/yantra/get`, { params })
      .pipe(catchError(this.util.handleError("yantra", [])));
  }
  listDailyReward(params) {
    return this.http
      .get(`${this.baseUrl}/inventory/dailyReward/list`, { params })
      .pipe(catchError(this.util.handleError("dailyReward/", [])));
  }
  deleteDailyReward(params) {
    return this.http
      .delete(`${this.baseUrl}/inventory/dailyReward/delete`, { params })
      .pipe(catchError(this.util.handleError("dailyReward/", [])));
  }
  editDailyReward(body) {
    return this.http
      .post(`${this.baseUrl}/inventory/dailyReward/add`, body)
      .pipe(catchError(this.util.handleError("dailyReward/", [])));
  }
  addDailyReward(body) {
    return this.http
      .post(`${this.baseUrl}/inventory/dailyReward/add`, body)
      .pipe(catchError(this.util.handleError("dailyReward/", [])));
  }
  getDailyReward(params) {
    return this.http
      .get(`${this.baseUrl}/inventory/dailyReward/get`, { params })
      .pipe(catchError(this.util.handleError("dailyReward/", [])));
  }
}