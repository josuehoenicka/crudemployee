import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateEmployeesComponent } from './components/employees/update-employees/update-employees.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: "full"
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: "full"
  },
  {
    path: 'employees',
    component: UpdateEmployeesComponent, /* TASK: Create a new component to employees main component */
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
