import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient){ }

  addQuestion(questionId:number,questionValue:string,vote:number,description:string,subcatId:number,empId:number){
      return  this.http.post<String>('forum/viewques/addquestion',{
          qId:questionId,
          questionValue:questionValue,
          vote:vote,
          description:description,
          subcatId:subcatId,
          empId:empId,
      },
      )                                 
  }

  updateQuestion(questionId:number,questionValue:string,description:string,subcatId:number){
    return  this.http.post<String>('forum/viewques/update',{
        qId:questionId,
        questionValue:questionValue,
        description:description,
        subcatId:subcatId
    },
    )                                 
}
}
