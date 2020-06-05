import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  gradId:any;
  assessments=[];
  grad=[];
  tests=[];
  categories = ["Quiz","MCQ","Assignment","Project"]
  constructor(
    private route: ActivatedRoute,
    private profileService:ProfileService,
    ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      this.gradId = paramMap.get('gradId');
    });
    this.profileService.viewProfile(this.gradId).subscribe((details) => {
      this.assessments.push(details);
      console.log(details);
     const gmy=this.assessments[0];
      this.grad=gmy['grad'];
      this.tests=gmy['assessments'];
    });

}
}
