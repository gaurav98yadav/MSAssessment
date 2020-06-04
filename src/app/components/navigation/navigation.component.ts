import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionStorageService } from 'angular-web-storage';
import { ProjectServiceService } from 'src/app/providers/project-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public data: any = []
  public display = "none";
  categories = ["Quiz", "MCQ","Assignment","Project"]
  courses = ["React", "Angular","Java","SQL","React Native"]
  course:string= "";
  test_name:string="";
  danger = "none"
  category: string = "";
  questions: string = "";
  description: string = "";
  categorydisplay = "none";
  grad_id: number = 0;
  feedback: string = "";  
  total_marks: number =0;
  build_marks: number=0;
  testing_marks:number=0;
  process_marks:number=0;
  assessment_type: number=0;

  private matchquestion: any = []
  constructor(public session: SessionStorageService,
    private router: Router,
    public projectService: ProjectServiceService) {
    this.data[0] = this.session.get("1");
}

  ngOnInit() {

  }
  
  logout() {
    this.session.remove("1");
    this.data[0] = this.session.get("1");
    this.session.set("3", true);
    console.log(this.data)
    this.router.navigate(['/'])
  }
  homeredirect() {
    this.router.navigate(['/home'])

  }
  viewTrends(){
    this.router.navigate(['/trends'])
  }
  viewTrainingMaterial(){
    this.router.navigate(['/trainingmaterial'])
  }
  openNav() {
  console.log("something")
  document.getElementById("mySidenav").style.width = "250px";
  }
  
  closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  }

  postassessment() {
    console.log("called");
      if(this.category==="Project")
      {
            this.projectService.addProject(1,this.session.get("1").empId,this.grad_id,this.categories.indexOf(this.category)+1,this.feedback,this.build_marks,this.process_marks,this.testing_marks,this.course,this.test_name).subscribe((res) => {
              console.log(res);
          if(res)
          window.location.reload();
          else
          {
            console.log("Duplicate Entry");
            window.alert("Assessment for this Student Already Exits, Try Editing it.");
            window.location.reload();
          }
        });
      }
      else
      {
        console.log(this.session.get("1"));
        this.projectService.addAssessment(1,this.session.get("1").empId,this.grad_id,this.categories.indexOf(this.category)+1,this.feedback,this.total_marks,this.course,this.test_name).subscribe((res) => {
          console.log(res);
          if(res)
          window.location.reload();
          else
          {
            console.log("Duplicate Entry");
            window.alert("Assessment for this Student Already Exits, Try Editing it.");
            window.location.reload();
          }
        });
      }
    }

  categoryselect(id: number) {
    console.log(id);
    this.categorydisplay = "none";
    this.router.navigate(["viewcategory/" + id]).then(() => {
      window.location.reload();
    })
  }
  checkCategory(){
    if(this.category=="Project")
    return true;
    else
    return false;
  }
  opendropdown() {
    if (this.categorydisplay === "none") {
      this.categorydisplay = "block";

    }
    else {
      this.categorydisplay = "none"
    }

  }
}
