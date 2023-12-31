import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManuscriptserviceService {
  public weburl="http://localhost:44303"
  

 
  
  constructor(private http:HttpClient) { }

  postsavedata(id:any): any{
    return this.http.post(this.weburl+"api/Manuscript/Fileupload",id) 
   }
   savesubjectcontent1(subjectcontentData: any) {
    return this.http.post('http://localhost:44303'+'/api/Registration/Savesubjectcontent', subjectcontentData)
  }
  getsubjectcontentData1() {
    return this.http.get('http://localhost:44303'+'/api/Registration/GetsubjectcontentData')
  }

  
  getmanuscriptcontentData() {
    return this.http.get('http://localhost:44303/api/ManuscriptContent/getmanuscriptcontentData')
  }
  getmanuscriptsubmissionData() {
    return this.http.get('http://localhost:44303/api/Manuscript/getmanuscriptsubmissionData')
  }
  FetchManuscriptNumber(){
    return this.http.get('http://localhost:44303/api/Manuscript/FetchManuscriptNumber')
  }
 
  getReviewerList(){
    return this.http.get('http://localhost:44303/api/Manuscript/getReviewerList')
  }
  FetchAuthorName(){
    return this.http.get('http://localhost:44303/api/Manuscript/FetchAuthorName"')
    
  }

  saveReviewers(reviewerData:any){
    return this.http.post('http://localhost:44303/api/ReviewSubmission/saveReviewers', reviewerData)
  }
  
  getManusubmissionDetailsByRegisterID(id:any){
    return this.http.get('http://localhost:44303/api/Manuscript/GetManuscriptDetailsByRegisterID/'+id)
  }





  

 

 

}
