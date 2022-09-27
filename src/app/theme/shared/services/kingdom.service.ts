import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { id } from '@swimlane/ngx-datatable';
// import { id } from '@swimlane/ngx-datatable';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class KingdomService {
  sAccessToken: any
  private baseUrl: string = environment.apiUrl

  constructor(public http: HttpClient, private util: UtilService) {

    this.sAccessToken = localStorage.getItem('accessToken')
  }
  list(params) {
    return this.http.get(`${this.baseUrl}/kingdom`, { params }).pipe(
      catchError(this.util.handleError('kingdom', []))
    );

  }
}
