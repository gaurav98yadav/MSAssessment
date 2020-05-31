import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { SessionStorageService } from 'angular-web-storage';
import { UserDetails } from 'src/app/Models/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class SessionService  implements Resolve<UserDetails> {
  constructor(public session: SessionStorageService) {}

  resolve():UserDetails {
    const u=new UserDetails("","","","","");
    return u;
  }
}