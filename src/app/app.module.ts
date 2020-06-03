import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/indexpage/index/index.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SocialLoginModule, AuthServiceConfig,GoogleLoginProvider} from 'angular5-social-login';
import { NavigationComponent } from './components/navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AngularWebStorageModule } from 'angular-web-storage';
import {LineChartComponent} from './components/line-chart/line-chart.component'
import {PieChartComponent} from './components/pie-chart/pie-chart.component'
import { HomeComponent } from './components/home/home.component';
import { IndexnavigationComponent } from './components/indexnavigation/indexnavigation.component';
import {NgbdModalContent } from './components/indexnavigation/indexnavigation.component';
import { startsWithPipe } from './customstart.pipes';
import { ChartsModule } from 'ng2-charts';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ViewcategoryComponent } from './components/viewcategory/viewcategory.component';
import {BarChartComponent} from './components/bar-chart/bar-chart.component'
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrendsComponent } from './components/trends/trends.component';

const config=new AuthServiceConfig([
  {
     id:GoogleLoginProvider.PROVIDER_ID,
     provider: new GoogleLoginProvider('465321518697-som23hgcog8aoujcjm0v6d1mp7epfi2i.apps.googleusercontent.com') 
  }
  ]);
  export function provideConfig(){
    
    return config;
  }
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavigationComponent,
    NgbdModalContent,
    HomeComponent,
    IndexnavigationComponent,
    startsWithPipe,
    NotfoundComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    ViewcategoryComponent,
    TrendsComponent
    ],
      entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    SocialLoginModule,
    ChartsModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    AngularWebStorageModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    {
      provide:AuthServiceConfig, 
      useFactory:provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
