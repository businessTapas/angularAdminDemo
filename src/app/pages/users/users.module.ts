import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { UsersPageComponent } from './containers';
import { UsersRoutingModule } from './users-routing.module';
import { Header_footerModule } from '../../header_footer_side/header_footer.module';
import { SellerTableComponent, MaterialTableComponent, AddEditComponent } from './components';
import { TablesService } from './services';

@NgModule({
  declarations: [
    UsersPageComponent,
    MaterialTableComponent,
    SellerTableComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    SharedModule,
    Header_footerModule
  ],
  providers: [
    TablesService
  ]
})
export class UsersModule { }
