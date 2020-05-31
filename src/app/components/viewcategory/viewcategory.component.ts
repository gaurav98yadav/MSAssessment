import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/providers/homeService/home.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {
  categoryid: any;
  questions=[];
  categories = ["Quiz","MCQ","Assignment","Project"]
  
  constructor( private router: Router,
    private route: ActivatedRoute,
    public homeservice:HomeService,
    public session: SessionStorageService,
    ) {
    this.route.paramMap.subscribe(paramMap => {
      this.categoryid = paramMap.get('categoryid');
    })
    this.homeservice.viewAssessments(this.categoryid).subscribe((details) => {
      this.questions.push(details);
      console.log("question answer",this.questions[0])
      
    });
   }
   ngOnInit() {
    if(this.session.get("2"))
    {
      this.session.set("2",false);
      window.location.reload();
    }
  }
  checkTrainer()
  {
    if(this.session.get("1").empId==1)
    return true;
    else 
    return false;
  }

}
