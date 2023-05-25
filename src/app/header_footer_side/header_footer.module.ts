import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { HeaderModule } from './header/header.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsMenuComponent } from './ui-elements/settings-menu/settings-menu.component';
import { DateMenuComponent } from './ui-elements/date-menu/date-menu.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    SettingsMenuComponent,
    DateMenuComponent,
    LayoutComponent
  ],
  imports: [
    FormsModule,
    HeaderModule,
    SharedModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderModule,
    SidebarComponent,
    FooterComponent,
    SettingsMenuComponent,
    DateMenuComponent,
    LayoutComponent
  ]
})
export class Header_footerModule { }
