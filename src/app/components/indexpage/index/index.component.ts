import { Component, OnInit } from '@angular/core';
import {  SessionStorageService } from 'angular-web-storage';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  constructor(public session: SessionStorageService) {
    if(this.session.get("3"))
    {
      this.session.set("3",false)
      window.location.reload()
    }
   }
 
}
