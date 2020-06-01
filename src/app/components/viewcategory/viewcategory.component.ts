import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/providers/homeService/home.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { ProjectServiceService } from 'src/app/providers/project-service.service';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {
  categoryid: any;
  assessments=[];
  trainer_feedback;
  grad_id:number;
  showModal:boolean
  assessment_id:number;
  total_marks:number;
  build_marks:number;
  testing_marks:number;
  process_marks:number;
  trainer_id:number;
  categories = ["Quiz","MCQ","Assignment","Project"]
  
  constructor( private router: Router,
    private route: ActivatedRoute,
    public homeservice:HomeService,
    public projectservice:ProjectServiceService,
    public session: SessionStorageService,
    ) {
    this.route.paramMap.subscribe(paramMap => {
      this.categoryid = paramMap.get('categoryid');
    })
    this.homeservice.viewAssessments(this.categoryid).subscribe((details) => {
      this.assessments.push(details);
      console.log("question answer",this.assessments[0])
      
    });
   }
   ngOnInit() {
    if(this.session.get("2"))
    {
      this.session.set("2",false);
      window.location.reload();
    }
  }
  show()
{
  this.showModal = true; // Show-Hide Modal Check
}
setValues(i:number)
{
  console.log(i);
  let ass= this.assessments[0];
  this.grad_id=ass[i].grad_id;
  this.assessment_id=ass[i].assessment_id;
  console.log(this.grad_id);

}

  checkTrainer(trainer_id:number)
  {
    console.log(trainer_id)
    if(this.session.get("1").empId==trainer_id)
    return true;
    else 
    return false;
  }
  editassessment()
  {
    this.projectservice.editAssessment(this.assessment_id,this.grad_id,this.categoryid,this.trainer_feedback,this.total_marks,this.build_marks,this.testing_marks,this.process_marks).subscribe((res) => {
      console.log(res);
      window.location.reload();
        });
  }
}
