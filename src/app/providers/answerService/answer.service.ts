import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http:HttpClient){ }
  addAnswer(answerid:number,answerValue:string,questionId:number,empId:number)
  {
    return  this.http.post('forum/answers/addAns',{
      answerId:answerid,
      answerValue:answerValue,
      quesId:questionId,
      empId:empId
  })     
  }
  addComments(empId:number,answerid:number,commentValue:String)
  {
    return  this.http.post('forum/addReply',{
      empId:empId,
      answerId:answerid,
      commentValue:commentValue
  })     
  }
}
