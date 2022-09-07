import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import { SavebookComponent } from './Components/savebook/savebook.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';

import { UpdateStudentComponent } from './update-student/update-student.component';
import { GetStudentByIdComponent } from './Components/get-student-by-id/get-student-by-id.component';
import { GetStudentsByClassComponent } from './Components/get-students-by-class/get-students-by-class.component';


const routes: Routes = [{path:'updatestudent' , component : UpdateStudentComponent},{path:'deleteStudents',component: DeleteStudentComponent},{path:'savestudent', component: SavebookComponent},{path:'aboutus', component: AboutusComponent},{path:'dashboard', component: DashboardComponent},{path:'getstudentByid', component: GetStudentByIdComponent},{path:'getstudentByclass', component: GetStudentsByClassComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
