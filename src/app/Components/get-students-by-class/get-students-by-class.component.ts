import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import Student from 'src/app/Entity/Student';

@Component({
  selector: 'app-get-students-by-class',
  templateUrl: './get-students-by-class.component.html',
  styleUrls: ['./get-students-by-class.component.css']
})
export class GetStudentsByClassComponent implements OnInit {

  student: Student = new Student();

  studentClass:string="";


  getStudentByClass(studentClass) {

    console.log(studentClass);

      
    this.studentService.getStudentByClass(studentClass).
      subscribe((response) => {
        console.log(response);
        this.student = response as Student;
      });
  }


  constructor(private studentService: StudentService) { }

  ngOnInit(): void {



  }

}