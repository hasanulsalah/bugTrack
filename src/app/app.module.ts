import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ExpertloginComponent } from './expertlogin/expertlogin.component';
import { ReporterloginComponent } from './reporterlogin/reporterlogin.component';
import { AdminpanelComponent } from './admin-login/adminpanel/adminpanel.component';
import { ExpertpanelComponent } from './expertlogin/expertpanel/expertpanel.component';
import { ReporterpanelComponent } from './reporterlogin/reporterpanel/reporterpanel.component';
import { ViewbugsComponent } from './admin-login/adminpanel/viewbugs/viewbugs.component';
import { ConfigexpertComponent } from './admin-login/adminpanel/configexpert/configexpert.component';
import { AddexpertComponent } from './admin-login/adminpanel/addexpert/addexpert.component';
import { AssignedbugsComponent } from './expertlogin/expertpanel/assignedbugs/assignedbugs.component';
import { ReportersignupComponent } from './reporterlogin/reportersignup/reportersignup.component';
import { ReportbugComponent } from './reporterlogin/reporterpanel/reportbug/reportbug.component';
import { ViewbugstatusComponent } from './reporterlogin/reporterpanel/viewbugstatus/viewbugstatus.component';
import { ReporterbugdetailComponent } from './reporterlogin/reporterpanel/viewbugstatus/reporterbugdetail/reporterbugdetail.component';
import { AdmindetailComponent } from './admin-login/adminpanel/viewbugs/admindetail/admindetail.component';
import { ExpertcommentComponent } from './expertlogin/expertpanel/assignedbugs/expertcomment/expertcomment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminLoginComponent,
    ExpertloginComponent,
    ReporterloginComponent,
    AdminpanelComponent,
    ExpertpanelComponent,
    ReporterpanelComponent,
    ViewbugsComponent,
    ConfigexpertComponent,
    AddexpertComponent,
    AssignedbugsComponent,
    ReportersignupComponent,
    ReportbugComponent,
    ViewbugstatusComponent,
    ReporterbugdetailComponent,
    AdmindetailComponent,
    ExpertcommentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
