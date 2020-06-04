import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/indexpage/index/index.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import {TrendsComponent} from './components/trends/trends.component';
import { SessionService } from './providers/sessionService/session.service'
import {NotfoundComponent} from './components/notfound/notfound.component'
import {LineChartComponent} from './components/line-chart/line-chart.component'
import { ViewcategoryComponent } from './components/viewcategory/viewcategory.component';
import { TrainingmaterialComponent } from './components/trainingmaterial/trainingmaterial.component';
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'viewcategory/:categoryid', component: ViewcategoryComponent },
  { path: 'home', component: HomeComponent},
  { path: 'trends', component: TrendsComponent},
  {path: 'chart', component:LineChartComponent},
  {path: 'trainingmaterial', component:TrainingmaterialComponent},
  { path: '**', component: NotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    SessionService
  ]
})
export class AppRoutingModule { }
