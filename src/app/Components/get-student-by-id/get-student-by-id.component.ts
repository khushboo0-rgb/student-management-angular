import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import Student from 'src/app/Entity/Student';

@Component({
  selector: 'app-get-student-by-id',
  templateUrl: './get-student-by-id.component.html',
  styleUrls: ['./get-student-by-id.component.css']
})
export class GetStudentByIdComponent implements OnInit {


  student: Student = new Student();

  id:number=0;


  getStudentById(id) {

    console.log(id);

      
    this.studentService.getStudentById(id).
      subscribe((response) => {
        console.log(response);
        this.student = response as Student;
      });
  }


  constructor(private studentService: StudentService) { }

  ngOnInit(): void {



  }

}