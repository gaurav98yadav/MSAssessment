import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  viewProfile(gradId: any) {

    return this.http.get("forum/home/profile/"+gradId);

  }

  constructor(private http:HttpClient) { }
}
