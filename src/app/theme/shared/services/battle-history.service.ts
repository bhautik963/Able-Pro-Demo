import { Injectable } from '@angular/core';
import { catchError, map } from "rxjs/operators";
import { environment } from "../../../../environments/environment";
import { UtilService } from "./util.service";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BattleHistoryService {
  sAccessToken: any;
  private baseUrl: string = environment.apiUrl;

  constructor(public http: HttpClient, private util: UtilService) { }

  listbattleHistory(params) {
    return this.http
      .get(`${this.baseUrl}/battleHistory`, { params })
      .pipe(catchError(this.util.handleError("battleHistory", [])));
    // }
  }
}
