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
    const headers = { headers: new HttpHeaders({ enctype: 'multipart/form-data' }) };
    return this.http.post('forum/trainingMaterial/add', formData, headers);
  }
}
