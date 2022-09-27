import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private baseUrl: string = environment.apiUrl + environment.version;

  constructor(private http: HttpClient, private util: UtilService) { }

  getData(data) {
    return this.http.get(`${this.baseUrl}settings/get`, data).pipe(
      catchError(this.util.handleError('getSettings', []))
    );
  }
  editData(data) {
    return this.http.post(`${this.baseUrl}settings/edit`, data).pipe(
      catchError(this.util.handleError('editSettings', []))
    );
  }

  editVersion(data) {
    return this.http.post(`${this.baseUrl}settings/version`, data).pipe(
      catchError(this.util.handleError('editVersion', []))
    );
  }

}
