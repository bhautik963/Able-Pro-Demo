import { Component, OnInit } from '@angular/core';
// import { DashboardService } from '../../../../theme/shared/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  totalData: any;
  userCount: any = [];
  totalRevenue: any = [];
  withdrawalCounting: any = [];
  gameCount: any = [];

  botRevenue: any = [];
  userbal: any = [];

  constructor() {
  }

  ngOnInit() {
    
  }




  
}
