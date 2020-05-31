import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: any = []
  constructor(
    public session: SessionStorageService,
    private router: Router) {
     

  }
  ngOnInit() {
     this.data[0] = this.session.get("1");
    console.log(this.data);
    
    // if (this.data[0].token=="undefined") {
    //   this.router.navigate(['/home'])
    // }
    // else {
    //   this.router.navigate(['/'])

    // }
  }

  title = 'forum';
}
