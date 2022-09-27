import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private baseUrl: string = environment.apiUrl

  constructor(public http:HttpClient,private util:UtilService) {

   }
   kingdomRanking(params){
      return this.http.get(`${this.baseUrl}/kingdom/ranking`,{params}).pipe(
            catchError(this.util.handleError('kingdomRanking', []))
        );
   }
   warriorRanking(params){
    return this.http.get(`${this.baseUrl}/warrior/ranking`,{params}).pipe(
      catchError(this.util.handleError('warriorRanking', []))
     );
   }
}