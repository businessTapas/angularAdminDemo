import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common/';

import { JwtInterceptor, ErrorInterceptor } from './_helper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './_components';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
// imported after DASH BOARD adding
import { Header_footerModule } from './header_footer_side/header_footer.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    //ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    DashboardModule,
    Header_footerModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true },
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
