import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_helper/auth.guard';
import { HomeComponent } from './home/home.component';
import { DashboardPageComponent } from './pages/dashboard/containers';

const usersModule = () => import('./pages/users/users.module').then(m => m.UsersModule)
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
//const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const departmentModule = () => import('./department/department.module').then(x => x.DepartmentModule);

const routes: Routes = [
  { path: '', component: DashboardPageComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  //{ path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'department', loadChildren: departmentModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
