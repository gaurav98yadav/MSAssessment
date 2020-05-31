import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionanswerService {
  constructor(private http:HttpClient) { }
  
  getQuestionanswerById(Id)
  {
    console.log("getquestion answer called");
    return this.http.get("forum/questions/"+Id);
  }
  upvote(qId:number,empId:number,vote:number)
  {
    return this.http.post<any>("forum/Questions/vote",{
    qId:qId,
    empId:empId,
    vote:vote
    });
  }
  downvote(qId:number,empId:number,vote:number)
  {
    return this.http.post("forum/Questions/vote",{
    qId:qId,
    empId:empId,
    vote:vote
    });
  }
  upanswervote(answerId:number,empId:number,vote:number)
  {
    return this.http.post<any>("forum/Answers/vote",{
      answerId:answerId,
    empId:empId,
    vote:vote
    });
  }
  downanswervote(answerId:number,empId:number,vote:number)
  {
    return this.http.post("forum/Answers/vote",{
    answerId:answerId,
    empId:empId,
    vote:vote
    });
  }

  changecomment(commentId:number,commentValue:String)
  {
    return this.http.post("forum/update/comment",{
      commentId:commentId,
      commentValue:commentValue
      });
  }
  changeanswer(answerId:number,answerValue:String)
  {
    return this.http.post("forum/update/answer",{
      answerId:answerId,
      answerValue:answerValue
      });
  }
  saveanswer()
  {

  }
}
