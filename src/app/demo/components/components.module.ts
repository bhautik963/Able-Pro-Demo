import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PrettyjsonPipe } from 'src/app/theme/shared/pipes/prettyjson.pipe';
import { SharedModule } from 'src/app/theme/shared/shared.module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    NgxDatatableModule,
  ],
  providers: [DatePipe, PrettyjsonPipe]
})
export class ComponentsModule { }
