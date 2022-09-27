import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { UtilService } from './util.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class KathikaService {

  sAccessToken:any
  private baseUrl: string = environment.apiUrl

  constructor(public http:HttpClient,private util:UtilService) {

    this.sAccessToken= localStorage.getItem('accessToken')
   }
   listKathika(params){
          return this.http.get(`${this.baseUrl}/kathika/list`,{params}).pipe(
            catchError(this.util.handleError('kathika', []))
        );
    // }
   }
   deleteKathika(params){
    return this.http.delete(`${this.baseUrl}/kathika/delete`,{params}).pipe(
      catchError(this.util.handleError('kathika', []))
    );
   }
   editKathika(body){
    return this.http.post(`${this.baseUrl}/kathika/add`,body).pipe(
      catchError(this.util.handleError('kathika', []))
    );
   }
   addKathika(body){
    return this.http.post(`${this.baseUrl}/kathika/add`,body).pipe(
      catchError(this.util.handleError('kathika', []))
    );
   }
   getKathika(params){
    return this.http.get(`${this.baseUrl}/kathika/get`,{params}).pipe(
      catchError(this.util.handleError('kathika', []))
    );
   }
  }