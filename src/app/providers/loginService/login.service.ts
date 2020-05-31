import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
addUser(trainerId:number,name:string,email:string,profilepic:string,idToken:string){
       return this.http.post('forum/home/addTrainer',{
         trainer_id:trainerId,
         trainer_name:name,
         trainer_email:email,
         trainer_photo:profilepic,
         idToken:idToken
       })
}
}

