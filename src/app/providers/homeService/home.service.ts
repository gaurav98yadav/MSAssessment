import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http:HttpClient) { }
  viewGrads()
  {
    console.log("get grad details called");
    return this.http.get("forum/home");
  }
  viewAssessments(Id)
  {
    return this.http.get("forum/home/category/"+Id);

  }
}
