import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/providers/homeService/home.service';
import {  SessionStorageService } from 'angular-web-storage';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective
  questions=[]
  arr=[]
  previous: any = [];
  headElements=['Grad_ID','Grad_Name','College','Location','Year','Marks']
  constructor(public session: SessionStorageService,
    private cdRef: ChangeDetectorRef,
    private router: Router,
     public homeservice:HomeService) { 
      this.homeservice.viewGrads().subscribe((details) => {
        this.questions.push(details);
        this.arr=this.questions[0];
        console.log(this.questions[0])
        
      });

     }
  ngOnInit() {
    if(this.session.get("2"))
    {
      this.session.set("2",false);
      window.location.reload();
    }
  }
  viewquestion(qId:number)
  {
    this.router.navigate(['/question/'+qId])
  }
  profile(gradId:number)
  {
    this.router.navigate(['/profile/'+gradId])
  }
  onSearchChange(gmy:string)
{
  console.log(gmy);
  var ass =this.arr
  const arr2 = ass.filter(ass => ass.grad_name.startsWith(gmy) ||  ass.grad_college.startsWith(gmy) || ass.grad_location.startsWith(gmy));
  console.log(arr2);
  this.questions[0]=arr2;
}
  
}
