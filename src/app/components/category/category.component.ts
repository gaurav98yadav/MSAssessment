import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { IfStmt } from '@angular/compiler';
import { CategoryService } from '../../providers/categoryService/category.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
  techsubcategory = ['Java', 'Python', 'Spring-Boot', 'Angular',
    'React-Js', 'Sql']
  hrsubcategory = ['Recruitment', 'Training', 'Compensation', 'Perks']
  category = ""
  subcategories = []
  data = []
  background = []
  color = []
  catId = 1;
  subcatId = [];
  displaydone = "none";
  constructor(public session: SessionStorageService,
    private categoryservice: CategoryService,
    private router: Router
  ) {  }

  ngOnInit() {
    if (this.session.get("2")) {
      this.session.set("2", false);
      window.location.reload();
    }
  }
  hrcategory() {
    this.category = "HR";
    this.catId = 0;
    this.color = [];
    this.subcatId = [];
    this.background = [];
    this.subcategories = []
    this.data = this.hrsubcategory

  }
  techcategory() {
    this.category = "Technical Stack";
    this.catId = 1;
    this.color = [];
    this.subcatId = [];
    this.background = [];
    this.subcategories = []
    this.data = this.techsubcategory
  }
  subcategory(item: string, i: number) {

    if (this.subcategories.includes(item)) {
      if (this.catId == 1) {
        this.subcatId.splice(this.subcatId.indexOf(1 + this.techsubcategory.indexOf(item)));
      }
      else {
        this.subcatId.splice(this.subcatId.indexOf(this.techsubcategory.length + this.hrsubcategory.indexOf(item)));

      }
      this.subcategories.splice(this.subcategories.indexOf(item));
      this.color[i] = "";
      this.background[i] = "";
      if (this.subcategories.length == 0) {
        this.displaydone = "none";
      }
    }
    else {

      this.displaydone = "block";
      this.subcategories.push(item);
      this.color[i] = "white";
      this.background[i] = "#03cafc";
      console.log(this.catId, "cat id")
      if (this.catId == 1) {
        console.log(this.techsubcategory)
        this.subcatId.push(1 + this.techsubcategory.indexOf(item))
        console.log(this.subcatId)

      }
      else {
        console.log(this.techsubcategory)
        this.subcatId.push(this.techsubcategory.length + this.hrsubcategory.indexOf(item))
        console.log(this.subcatId)


      }
    }
  }
  postcategory() {
    this.categoryservice.addCategory(this.session.get("1").empId, this.subcatId).subscribe(() => {
      this.router.navigate(['/home'])
    });


  }
}
