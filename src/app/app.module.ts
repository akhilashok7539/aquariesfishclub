import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminpannelhomeComponent } from './adminpannel/adminpannelhome/adminpannelhome.component';
import { SidebarComponent } from './adminpannel/sidebar/sidebar.component';
import { ReportsComponent } from './adminpannel/reports/reports.component';
import { ChooseExamsComponent } from './user/choose-exams/choose-exams.component';
import { ChooseExamsUserComponent } from './user/choose-exams-user/choose-exams-user.component';
import { RegisterComponent } from './register/register.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { AddexamsComponent } from './adminpannel/adminpannelhome/addexams/addexams.component';
import { EditExamComponent } from './adminpannel/adminpannelhome/edit-exam/edit-exam.component';
import { LoginService } from './login/login.service';
import { AdminService } from './adminpannel/service/admin.service';

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SliderComponent,
    AboutusComponent,
    LoginComponent,
    AdminpannelhomeComponent,
    SidebarComponent,
    ReportsComponent,
    ChooseExamsComponent,
    ChooseExamsUserComponent,
    RegisterComponent,
    AdminLoginComponent,
    AddexamsComponent,
    EditExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService,AdminService],
  bootstrap: [AppComponent],
  entryComponents:[ReportsComponent,AdminpannelhomeComponent]
})
export class AppModule { }
