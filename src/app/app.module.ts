/* ANGULAR CORE */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* COMPONENTS & MODULES */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateEmployeesComponent } from './employees/components/update-employees/update-employees.component';
import { NavComponent } from './common/nav/nav.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';

/* SERVICES */

/* LIBRARIES */

/* CLASSES, INTERFACES, ENUMS & OTHERS */

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UpdateEmployeesComponent,
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
