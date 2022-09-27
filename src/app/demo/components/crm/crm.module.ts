import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../../../theme/shared/shared.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CrmRoutingModule,
    SharedModule,
  ]
})
export class CrmModule { }
