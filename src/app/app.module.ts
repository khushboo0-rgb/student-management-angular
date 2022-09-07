import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SavebookComponent } from './Components/savebook/savebook.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { GetStudentByIdComponent } from './Components/get-student-by-id/get-student-by-id.component';
import { GetStudentsByClassComponent } from './Components/get-students-by-class/get-students-by-class.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    DashboardComponent,
    SavebookComponent,
    UpdateStudentComponent,
    DeleteStudentComponent,
    GetStudentByIdComponent,
    GetStudentsByClassComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
