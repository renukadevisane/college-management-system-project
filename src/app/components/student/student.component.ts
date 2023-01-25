import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  StudentArray:any[]=[];
  isResultLoaded=false;
  isUpdateFormActive=false;
  name:string="";
  course:string="";
  gender:string="";
  mobile:number=0;
  email:string="";
  age:number=0;
  address:string="";
  currentStudentID="";
  constructor(private http:HttpClient)
  {
    this.getAllStudent();
  }
  getAllStudent(): void
  {
    this.http.get("http://localhost:8084/api/v1/student/getAllStudent")
    .subscribe((resultData: any)=>
      {
          this.isResultLoaded = true;
          console.log(resultData);
          this.StudentArray = resultData;
      });
  }
  register()
  {
    let bodyData={
      "name":this.name,"course":this.course,"gender":this.gender,"mobile":this.mobile,"email":this.email,
      "age":this.age,"address":this.address
    };
    this.http.post("http://localhost:8084/api/v1/student/save",bodyData,{responseType:'text'}).subscribe((resultData: any)=>
    {
  console.log(resultData);
  alert("Faculty registered successfully");
  this.getAllStudent();
  this.name="";
  this.course="";
  this.gender="";
  this.mobile=0;
  this.email="";
  this.age=0;
  this.address="";
});
  }
  setUpdate(data:any)
{
  this.name=data.name;
  this.course=data.course;
  this.gender=data.gender;
  this.mobile=data.mobile;
  this.email=data.email;
  this.age=data.age;
  this.address=data.address;
  this.currentStudentID=data.currentStudentid;
}
updateRecords()
{
  let bodyData={
    "studentid":this.currentStudentID,"name":this.name,"course":this.course,"gender":this.gender,"mobile":this.mobile,"email":this.email,
    "age":this.age,"address":this.address  };
  this.http.post("http://localhost:8084/api/v1/student/update",bodyData,{responseType:'text'}).subscribe((resultData: any)=>
{
  console.log(resultData);
  alert("Customer registered successfully");
  this.getAllStudent();
  this.name="";
  this.course="";
  this.gender="";
  this.mobile=0;
  this.email="";
  this.age=0;
  this.address="";

});
}
save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.updateRecords();
      }      
  }
  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:8084/api/v1/student/deletestudent"+ "/"+ data.studentid,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Deletedddd")
        this.getAllStudent();
        this.name="";
        this.course="";
        this.gender="";
        this.mobile=0;
        this.email="";
        this.age=0;
        this.address="";
      });
    }
   

    }
