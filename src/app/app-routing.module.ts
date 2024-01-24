import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard';
// import { DashboardEmployeeComponent } from './modules/dashboard-employee/dashboard-employee.component';

const routes: Routes = [
  // Other routes if needed
  { path: '', loadComponent: () => import('./modules/login-register/login-register.component').then(m => m.LoginRegisterComponent) },
  { path: 'dashboard', loadComponent: () => import('./modules/dashboard-employee/dashboard-employee.component').then(m => m.DashboardEmployeeComponent),  canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
