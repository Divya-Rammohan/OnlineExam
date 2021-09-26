import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { ReportComponent } from './report/report.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { RemoveQuestionsComponent } from './remove-questions/remove-questions.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutUsComponent,
    ResetPasswordComponent,
    ExamPageComponent,
    ReportComponent,
    AdminProfileComponent,
    AddQuestionsComponent,
    RemoveQuestionsComponent,
    ViewReportsComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
