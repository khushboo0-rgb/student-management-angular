import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import Student from 'src/app/Entity/Student';

@Component({
  selector: 'app-savebook',
  templateUrl: './savebook.component.html',
  styleUrls: ['./savebook.component.css']
})
export class SavebookComponent implements OnInit {
  title = "fill all the details below";
  student: Student= new Student();
  students: Student[] = [];
  save()
  {
    
    const observable = this.studentService.createStudent(this.student);
    observable.subscribe(
      (response: any) => {
        console.log(response);
      }


    )
  }
  
  

  constructor( public studentService: StudentService) { }

  ngOnInit(): void {
    const promise = this.studentService.getStudents();
    promise.subscribe((response) => 
    {
      console.log(response);
      this.students = response as Student[];}
  )

}

}