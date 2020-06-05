import { Component, OnInit } from '@angular/core';
import { TrainingmaterialService } from 'src/app/providers/trainingmaterial.service';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-trainingmaterial',
  templateUrl: './trainingmaterial.component.html',
  styleUrls: ['./trainingmaterial.component.css']
})
export class TrainingmaterialComponent implements OnInit {

  files: any = [];
  materials: any =[];
  fileId: number;
  uploadFile(event) {
    for (const index of event) {
      this.files.push(index);
    }
  }
  sendFilesToDB()
  {
    this.trainingmaterialservice.addTrainingMaterial(this.files,this.session.get("1").empId).subscribe((response) => {
      window.alert("Done");
      this.files = [];
      window.location.reload();
    });
  }
  deleteAttachment(i)
  {
    this.files.splice(i,1);
  }
  checkTrainer(trainer_id:number)
  {
    console.log(trainer_id)
    if(this.session.get("1").empId==trainer_id)
    return true;
    else 
    return false;
  }

  base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    return bytes.buffer;
  }

  downloadFile(data, fileType) {
    const byteArray = this.base64ToArrayBuffer(data);
    const blob = new Blob([byteArray], { type: fileType });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
  constructor(public trainingmaterialservice: TrainingmaterialService,public session: SessionStorageService) { }

  ngOnInit() {
    this.trainingmaterialservice.fetchTrainingMaterial().subscribe((details) =>{
      console.log(details);
      this.materials=details;
    });
  }
  setValues(i)
  {
    console.log(i);
    this.fileId=this.materials[i].fileId;
  }
  editFiles()
  {
    this.trainingmaterialservice.editTrainingMaterial(this.files,this.fileId).subscribe((details) => {
      console.log("edited");
      window.location.reload();
    });
  }
  deleteFiles(fileId:number)
  {
    console.log("hi"+fileId);
    this.trainingmaterialservice.deleteTrainingMaterial(fileId).subscribe((details) => {
      console.log("deleted");
      window.location.reload();
    });
  }

}
