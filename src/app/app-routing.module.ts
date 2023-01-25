import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';

import { ContactusComponent } from './components/contactus/contactus.component';
import { CourseComponent } from './components/course/course.component';

import { FacultyComponent } from './components/faculty/faculty.component';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';
import { PlacementsComponent } from './components/placements/placements.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path: "aboutus", component: AboutusComponent},
  {path: "contactus", component: ContactusComponent},
  {path: "faculty", component: FacultyComponent},

   {path: "placements", component: PlacementsComponent},
   
   {path: "course", component: CourseComponent},
   {path: "login", component: LoginComponent},
   {path: "student", component: StudentComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
