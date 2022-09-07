import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Student from './Entity/Student';
import { Observable,Subject } from "rxjs";  
  
import {FormControl,FormGroup,Validators} from '@angular/forms'; 

const BASE_URL_FOR_CREATING_STUDENT = "http://localhost:8085/savestudent";
const BASE_URL_FOR_ALL_STUDENT="http://localhost:8085/allstudents";
const BASE_URL_DELETE_STUDENT="http://localhost:8085/student/"
const BASE_URL_FOR_UPDATE_STUDENT="http://localhost:8085/update/"
const BASE_URL_TO_EARCH_STUDENT_BY_ID="http://localhost:8085/getstudent/";
const BASE_URL_TO_SEARCH_STUDENT_BY_CLASS="http://localhost:8085/getstudentByClass/";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 
  getStudentByClass(studentClass)
  {
    return this.http.get(BASE_URL_TO_SEARCH_STUDENT_BY_CLASS+studentClass);
  }

  createStudent(student:{firstname:string; lastname:string; subject:string;dateOfBirth:Date;studentClass:string})
  {   
    return this.http.post(BASE_URL_FOR_CREATING_STUDENT,student);
  }

getStudents()
{
  return this.http.get(BASE_URL_FOR_ALL_STUDENT);
}



deleteStudent(sid)
{
  return this.http.delete(BASE_URL_DELETE_STUDENT+sid);
}

updateStudent(st,sid)
{
 return this.http.put(BASE_URL_FOR_UPDATE_STUDENT+st.id, st);
}

getStudentById(id)
{
  return this.http.get(BASE_URL_TO_EARCH_STUDENT_BY_ID+id);
}



  constructor(public http: HttpClient) { }
}