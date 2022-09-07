import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import Student from '../Entity/Student';
import { SavebookComponent } from '../Components/savebook/savebook.component';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  students : Student[]=[];
  student: Student = new Student();
id:number=0;


  updateStudent(st,j)
  {

       this.id=st.sid;
        console.log(st.sid);
        this.student.id=st.id;
        this.student.firstname=st.firstname;
        this.student.dateOfBirth=st.dateOfBirth;
        this.student.studentClass=st.studentClass;
        this.student.lastname=st.lastname;
        this.student.subject=st.subject;

        

          }

          update(student)
          {
            
             console.log(student); 
        const observable=this.studentService.updateStudent(this.student,this.id);
        observable.subscribe(
          (response:any) => {
          console.log(response)
          alert("Student Updated");
          },
          function(error){
            console.log(error);
            alert("Something went wrong");        
          });

          window.location.reload()
            
          }

    


  constructor(private studentService:StudentService) { }

  ngOnInit(): void { 

    

    const promise = this.studentService.getStudents();
    promise.subscribe((response)=>{
      console.log(response);
      this.students=response as Student[];
      
    })
  
  }
}