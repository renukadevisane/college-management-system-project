import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent {
  FacultyArray:any[]=[];
isResultLoaded=false;
isUpdateFormActive=false;
facultyname:string="";
experience:string="";
mobile:Number=0;
email:string="";
department:string="";
currentFacultyID="";
constructor(private http:HttpClient)
{
  this.getAllFaculty();
}
getAllFaculty()
{
  this.http.get("http://localhost:8084/api/v1/faculty/getAllFaculty")
  .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.FacultyArray = resultData;
    });
}
register()
{
  let bodyData={
    "facultyname":this.facultyname,"experience":this.experience,"mobile":this.mobile,"email":this.email,"department":this.department
  };
  this.http.post("http://localhost:8084/api/v1/faculty/save",bodyData,{responseType:'text'}).subscribe((resultData: any)=>
  {
console.log(resultData);
alert("Faculty registered successfully");
this.getAllFaculty();
this.facultyname="";
this.experience="";
this.mobile=0;
this.email="";
this.department="";
  });
}
setUpdate(data:any)
{
  this.facultyname=data.facultyname;
  this.experience=data.experience;
  this.mobile=data.mobile;
  this.email=data.email;
  this.department=data.department;
  this.currentFacultyID=data.currentFacultyID;
}
save()
  {
    if(this.currentFacultyID == '')
    {
        this.register();
    }
      else
      {
       this.updateRecords();
      }      
  }

updateRecords()
{
  let bodyData={
    "facultyid":this.currentFacultyID,"facultyname":this.facultyname,"experience":this.experience,"mobile":this.mobile,"email":this.email,"department":this.department
  };
  this.http.post("http://localhost:8084/api/v1/faculty/update",bodyData,{responseType:'text'}).subscribe((resultData: any)=>
{
  console.log(resultData);
  alert("Details updated successfully");
  this.getAllFaculty();
  this.facultyname="";
  this.experience="";
  this.mobile=0;
  this.email="";
  this.department="";
});
}
  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:8084/api/v1/faculty/deletefaculty"+ "/"+ data.facultyid,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Faculty Deleted")
        this.getAllFaculty();
 
        this.facultyname="";
        this.experience="";
        this.mobile=0;
        this.email="";
        this.department="";      });
    }
  
  }
