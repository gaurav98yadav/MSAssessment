import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  addCategory(empId:number,list:any)
  {
    return  this.http.post('forum/Category/addEmployeeCategory',{
      empId:empId,
      list:list
  })   
}
}
