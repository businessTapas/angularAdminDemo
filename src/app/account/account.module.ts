 import { NgModule } from "@angular/core";
 import { ReactiveFormsModule } from '@angular/forms';
 import { CommonModule } from '@angular/common';
 import { AccountRoutingModule } from "./account-routing.module";
 import { LayoutComponent } from './layout.component';
 import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { YearPipe } from '../_helper/';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LayoutComponent,
        LoginComponent,
        RegisterComponent,
        YearPipe
        
    ],
    imports: [
        AccountRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule
    ]
})

export class AccountModule { }