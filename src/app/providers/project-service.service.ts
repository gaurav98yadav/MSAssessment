import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  constructor(private http:HttpClient){ }

  addProject(assessment_id:number,trainer_id:string,grad_id:number,assessment_type:number,trainer_feedback:string,build_marks:number,process_marks:number,testing_marks:number){
      return  this.http.post<String>('forum/home/addProject',{
          assessment_id:assessment_id,
          grad_id:grad_id,
          trainer_id:trainer_id,
          build_marks:build_marks,
          process_marks:process_marks,
          testing_marks:testing_marks,
          assessment_type:assessment_type,
          trainer_feedback:trainer_feedback
      },
      )                                 
  }
  addAssessment(assessment_id:number,trainer_id:number,grad_id:number,assessment_type:number,trainer_feedback:string,total_marks:number){
    return  this.http.post<String>('forum/home/addAssessment',{
        assessment_id:assessment_id,
        grad_id:grad_id,
        trainer_id:trainer_id,
        final_marks:total_marks,
        assessment_type:assessment_type,
        trainer_feedback:trainer_feedback
    },
    )                                 
}
  editAssessment(assessment_id:number,grad_id:number,assessment_type:number,trainer_feedback:string,total_marks:number){
    return  this.http.post<String>('forum/home/editAssessment',{
      assessment_id:assessment_id,
      grad_id:grad_id,
      final_marks:total_marks,
      assessment_type:assessment_type,
      trainer_feedback:trainer_feedback
  },
  )                                 
}
}
