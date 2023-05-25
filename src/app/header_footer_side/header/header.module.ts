import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';


import { HeaderComponent } from './containers';
import { UserComponent, EmailComponent } from './components';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SearchComponent } from './components/search/search.component';
import { ShortNamePipe } from './pipes';

@NgModule({
  declarations: [
    HeaderComponent,
    UserComponent,
    EmailComponent,
    NotificationsComponent,
    SearchComponent,
    ShortNamePipe
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HeaderModule { }
