import { ExpertcommentComponent } from './expertlogin/expertpanel/assignedbugs/expertcomment/expertcomment.component';
import { ViewbugsComponent } from './admin-login/adminpanel/viewbugs/viewbugs.component';
import { AdmindetailComponent } from './admin-login/adminpanel/viewbugs/admindetail/admindetail.component';
import { ReporterbugdetailComponent } from './reporterlogin/reporterpanel/viewbugstatus/reporterbugdetail/reporterbugdetail.component';
import { ViewbugstatusComponent } from './reporterlogin/reporterpanel/viewbugstatus/viewbugstatus.component';
import { ReportersignupComponent } from './reporterlogin/reportersignup/reportersignup.component';
import { ReporterpanelComponent } from './reporterlogin/reporterpanel/reporterpanel.component';
import { ExpertpanelComponent } from './expertlogin/expertpanel/expertpanel.component';
import { AdminpanelComponent } from './admin-login/adminpanel/adminpanel.component';
import { ReporterloginComponent } from './reporterlogin/reporterlogin.component';
import { ExpertloginComponent } from './expertlogin/expertlogin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminLoginComponent,
  },
  {
    path: 'expert',
    component: ExpertloginComponent,
  },
  {
    path: 'reporter',
    component: ReporterloginComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'adminpanel',
    component: AdminpanelComponent,
  },
  {
    path: 'expertpanel',
    component: ExpertpanelComponent,
  },
  {
    path: 'reporterpanel',
    component: ReporterpanelComponent,
  },
  {
    path: 'reportersignup',
    component: ReportersignupComponent,
  },
  {
    path: 'viewbugstatus',
    component: ViewbugstatusComponent,
  },
  {
    path: 'reporterbugdetail',
    component: ReporterbugdetailComponent,
  },
  {
    path: 'admindetail',
    component: AdmindetailComponent,
  },
  {
    path: 'viewbugs',
    component: ViewbugsComponent,
  },
  {
    path: 'expertcomment',
    component: ExpertcommentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
