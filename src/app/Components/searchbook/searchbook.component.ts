import { Component, OnInit } from '@angular/core';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {
  student: Student= new Student();
  students: Student[] = [];
  searchStudents()
  {
    
    const observable = this.studentService.getStudents()
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