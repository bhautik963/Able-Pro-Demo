import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule, BreadcrumbModule, CardModule, ModalModule } from './components';
import { DataFilterPipe } from './components/data-table/data-filter.pipe';
import { TodoListRemoveDirective } from './components/todo/todo-list-remove.directive';
import { TodoCardCompleteDirective } from './components/todo/todo-card-complete.directive';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ClickOutsideModule } from 'ng-click-outside';

import { SpinnerComponent } from './components/spinner/spinner.component';
// import { ApexChartComponent } from './components/chart/apex-chart/apex-chart.component';
// import { ApexChartService } from './components/chart/apex-chart/apex-chart.service';
import { ToastComponent } from './components/toast/toast.component';
import { ToastService } from './components/toast/toast.service';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LightboxModule } from 'ngx-lightbox';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdinalPipe } from './pipes/ordinal.pipe';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { IsDecimalDirective } from './pipes/is-decimal.directive';
import { DecimalDirective } from './pipes/decimal.directive';
import { PrettyjsonPipe } from './pipes/prettyjson.pipe';
// import { StadiumLevelComponent } from './services/stadium-level/stadium-level.component';
/*import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';*/

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    CardModule,
    BreadcrumbModule,
    ModalModule,
    ClickOutsideModule,
    LightboxModule,
    HttpClientModule,
    // NgxDatatableModule,
    NgbModule

  ],
  exports: [
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    CardModule,
    BreadcrumbModule,
    ModalModule,
    DataFilterPipe,
    TodoListRemoveDirective,
    TodoCardCompleteDirective,
    ClickOutsideModule,
    SpinnerComponent,
    // ApexChartComponent,
    GalleryComponent,
    ToastComponent,
    HttpClientModule,
    // NgxDatatableModule,
    NgbModule

  ],
  declarations: [
    DataFilterPipe,
    TodoListRemoveDirective,
    TodoCardCompleteDirective,
    SpinnerComponent,
    // ApexChartComponent,
    ToastComponent,
    GalleryComponent,
    OrdinalPipe,
    DecimalDirective,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    // ApexChartService,
    ToastService,
    PrettyjsonPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SharedModule { }
