import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingmaterialService {
  fetchTrainingMaterial() {
    console.log("get grad details called");
    return this.http.get("forum/trainingMaterial/view");
  }

  constructor(private http:HttpClient) { }

  addTrainingMaterial(fileList,trainerId) {
    const formData: FormData = new FormData();

    for (const obj of fileList) {
      formData.append('files[]', obj);
    }
    formData.append('trainerId', trainerId);
    const headers = { headers: new HttpHeaders({ enctype: 'multipart/form-data' }),responseType: 'text' as 'json' };
    return this.http.post('forum/trainingMaterial/add', formData, headers);
  }

  editTrainingMaterial(fileList,fileId){
    const formData: FormData = new FormData();

    for (const obj of fileList) {
      formData.append('files[]', obj);
    }
    formData.append('fileId', fileId);
    const headers = { headers: new HttpHeaders({ enctype: 'multipart/form-data' }),responseType: 'text' as 'json' };
    return this.http.post('forum/trainingMaterial/edit', formData, headers);
  }
  deleteTrainingMaterial(fileId:number){
    console.log("hi"+fileId);
    return  this.http.post<String>('forum/trainingMaterial/delete/'+fileId,{},{responseType: 'text' as 'json'}
  )                                 
  }

}
