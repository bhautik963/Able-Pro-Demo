import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class PlanetService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) {
    this.sAccessToken = localStorage.getItem("accessToken");
  }
  listPalnetChar(params) {
    return this.http
      .get(`${this.baseUrl}/ar/planet/list`, { params })
      .pipe(catchError(this.util.handleError("kathika", [])));
    // }
  }
  deletePalnetChar(params) {
    return this.http
      .delete(`${this.baseUrl}/ar/planet/delete`, { params })
      .pipe(catchError(this.util.handleError("kathika", [])));
  }
  editPalnetChar(body) {
    return this.http
      .post(`${this.baseUrl}/ar/planet/add`, body)
      .pipe(catchError(this.util.handleError("kathika", [])));
  }
  addPalnetChar(body) {
    return this.http
      .post(`${this.baseUrl}/ar/planet/add`, body)
      .pipe(catchError(this.util.handleError("kathika", [])));
  }
  getPalnetChar(params) {
    return this.http
      .get(`${this.baseUrl}/ar/planet/get`, { params })
      .pipe(catchError(this.util.handleError("kathika", [])));
  }
  listPalnet(params) {
    return this.http
      .get(`${this.baseUrl}/ar/character/list`, { params })
      .pipe(catchError(this.util.handleError("kathika", [])));
    // }
  }
  deletePalnet(params) {
    return this.http
      .delete(`${this.baseUrl}/ar/character/delete`, { params })
      .pipe(catchError(this.util.handleError("kathika", [])));
  }
  editPalnet(body) {
    return this.http
      .post(`${this.baseUrl}/ar/character/add`, body)
      .pipe(catchError(this.util.handleError("kathika", [])));
  }
  addPalnet(body) {
    return this.http
      .post(`${this.baseUrl}/ar/character/add`, body)
      .pipe(catchError(this.util.handleError("kathika", [])));
  }
  getPalnet(params) {
    return this.http
      .get(`${this.baseUrl}/ar/character/get`, { params })
      .pipe(catchError(this.util.handleError("kathika", [])));
  }
}
