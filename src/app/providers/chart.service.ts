import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) { }
  fetchData()
  {
    console.log("details called");
    return this.http.get("forum/home/trends");
  }
}
