import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminpannelhomeComponent } from './adminpannel/adminpannelhome/adminpannelhome.component';
import { ReportsComponent } from './adminpannel/reports/reports.component';
import { ChooseExamsComponent } from './user/choose-exams/choose-exams.component';
import { RegisterComponent } from './register/register.component';
import { ChooseExamsUserComponent } from './user/choose-exams-user/choose-exams-user.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { AddexamsComponent } from './adminpannel/adminpannelhome/addexams/addexams.component';
import { EditExamComponent } from './adminpannel/adminpannelhome/edit-exam/edit-exam.component';


const routes: Routes = [
  { path:'', redirectTo: '/Home', pathMatch: 'full' },
  { path:'Home', component: HomeComponent },
  { path:'login', component: LoginComponent },


  { path:'adminlogin', component: AdminLoginComponent },
  { path:'services', component: RegisterComponent },
  { path:'adminpannel', component: AdminpannelhomeComponent },
  { path:'reports', component: ReportsComponent },
  { path:'chooseExams', component: ChooseExamsComponent },
  { path:'addexams', component:  ChooseExamsUserComponent},
  { path:'exams', component:  AddexamsComponent},
  { path:'edit-exam', component:  EditExamComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
