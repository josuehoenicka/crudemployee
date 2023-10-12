import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateEmployeesComponent } from './components/update-employees/update-employees.component';
import { SearchEmployeesComponent } from './components/employees/search-employees/search-employees.component';
import { NavComponent } from './common/nav/nav.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UpdateEmployeesComponent,
    SearchEmployeesComponent,
    NavComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
