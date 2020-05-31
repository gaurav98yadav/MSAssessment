import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser, GoogleLoginProvider } from 'angular5-social-login';
import { Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  SessionStorageService,LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/providers/loginService/login.service';
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modelcontent.html'
})
export class NgbdModalContent {
  title = 'Acco';
  public user: any = SocialUser;
  public data: any = []
  @Input() name;
  constructor(public session: SessionStorageService,
    public localstorage: LocalStorageService,
    private router: Router,
    public activeModal: NgbActiveModal,
    private socialAuthService: AuthService,private loginservice:LoginService) { }

  googlelogin() {
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
      this.loginservice.addUser(321,this.user.name,this.user.email,this.user.image,this.user.idToken).subscribe((resp) => {
      this.user.empId=resp
      this.session.set("1", this.user);
      this.localstorage.set("1",this.user);
      console.log("data ----------->",this.localstorage.get("1"));
      this.session.set("2", true);
      this.data[0] = this.session.get("1");
      console.log("data",this.data);
      if (this.data[0]) {
        this.activeModal.close('Close click')
        this.router.navigate(['/home'])
     }
     });
    });
  }
}
@Component({
  selector: 'app-indexnavigation',
  templateUrl: './indexnavigation.component.html',
  styleUrls: ['./indexnavigation.component.css']
})
export class IndexnavigationComponent{
  data=[]
  constructor(private modalService: NgbModal,public session: SessionStorageService) { 
   
  }

  ngOnInit() {
    this.data[0] = this.session.get("1");
    console.log(this.data);
  }
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    console.log("hi");
    modalRef.componentInstance.name = 'World';
  }
}




