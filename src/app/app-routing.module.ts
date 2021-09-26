import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { ReportComponent } from './report/report.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { RemoveQuestionsComponent } from './remove-questions/remove-questions.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about us",
    component:AboutUsComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"reset password",
    component:ResetPasswordComponent
  },
  {
    path:"exam page",
    component:ExamPageComponent
  },
  {
    path:"report",
    component:ReportComponent
  },
  {
    path:"admin profile",
    component:AdminProfileComponent
  },
  {
    path:"add questions",
    component:AddQuestionsComponent
  },
  {
    path:"remove questions",
    component:RemoveQuestionsComponent
  },
  {
    path:"view reports",
    component:ViewReportsComponent
  }


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
