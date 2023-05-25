import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common/';
import { NgxEchartsModule } from 'ngx-echarts';
import { TrendModule } from 'ngx-trend';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { DashboardPageComponent } from './containers';
import {
  VisitsChartComponent,
  PerformanceChartComponent,
  ServerChartComponent,
  RevenueChartComponent,
  DailyLineChartComponent,
  SupportRequestsComponent,
  ProjectStatChartComponent
} from './components';

import { Header_footerModule } from '../../header_footer_side/header_footer.module';
import { DashboardService } from './services';


@NgModule({
  declarations: [
    DashboardPageComponent,
    VisitsChartComponent,
    PerformanceChartComponent,
    ServerChartComponent,
    RevenueChartComponent,
    DailyLineChartComponent,
    SupportRequestsComponent,
    ProjectStatChartComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    TrendModule,
    NgApexchartsModule,
    FormsModule,
    SharedModule,
    Header_footerModule
  ],
  exports: [
    VisitsChartComponent,
    PerformanceChartComponent,
    ServerChartComponent,
    RevenueChartComponent,
    DailyLineChartComponent,
    SupportRequestsComponent,
    ProjectStatChartComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
