import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AiLogicService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listAiDeck(params) {
    return this.http
      .get(`${this.baseUrl}/ai/deck/list`, { params })
      .pipe(catchError(this.util.handleError("AiDeck", [])));
    // }
  }
  deleteAiDeck(params) {
    return this.http
      .delete(`${this.baseUrl}/ai/deck/delete`, { params })
      .pipe(catchError(this.util.handleError("AiDeck", [])));
  }
  editAiDeck(body) {
    return this.http
      .post(`${this.baseUrl}/ai/deck/add`, body)
      .pipe(catchError(this.util.handleError("AiDeck", [])));
  }
  addAiDeck(body) {
    return this.http
      .post(`${this.baseUrl}/ai/deck/add`, body)
      .pipe(catchError(this.util.handleError("AiDeck", [])));
  }
  getAiDeck(params) {
    return this.http
      .get(`${this.baseUrl}/ai/deck/get`, { params })
      .pipe(catchError(this.util.handleError("AiDeck", [])));
  }
  listAiDeckPicker(params) {
    return this.http
      .get(`${this.baseUrl}/ai/deck/picker/list`, { params })
      .pipe(catchError(this.util.handleError("AiDeckPicker", [])));
    // }
  }
  deleteAiDeckPicker(params) {
    return this.http
      .delete(`${this.baseUrl}/ai/deck/picker/delete`, { params })
      .pipe(catchError(this.util.handleError("AiDeckPicker", [])));
  }
  editAiDeckPicker(body) {
    return this.http
      .post(`${this.baseUrl}/ai/deck/picker/add`, body)
      .pipe(catchError(this.util.handleError("AiDeckPicker", [])));
  }
  addAiDeckPicker(body) {
    return this.http
      .post(`${this.baseUrl}/ai/deck/picker/add`, body)
      .pipe(catchError(this.util.handleError("AiDeckPicker", [])));
  }
  getAiDeckPicker(params) {
    return this.http
      .get(`${this.baseUrl}/ai/deck/picker/get`, { params })
      .pipe(catchError(this.util.handleError("AiDeckPicker", [])));
  }
}
