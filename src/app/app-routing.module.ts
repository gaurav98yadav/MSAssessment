import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './components/question/question/question.component';
import { IndexComponent } from './components/indexpage/index/index.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { SessionService } from './providers/sessionService/session.service'
import { AskquestionComponent } from './components/askquestion/askquestion.component';
import { CategoryComponent } from './components/category/category.component';
import {NotfoundComponent} from './components/notfound/notfound.component'
import { ViewcategoryComponent } from './components/viewcategory/viewcategory.component';
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'question/:qId', component: QuestionComponent },
  { path: 'viewcategory/:categoryid', component: ViewcategoryComponent },
  { path: 'askquestion', component: AskquestionComponent },
  { path: 'home', component: HomeComponent},
  { path: 'category', component: CategoryComponent},
  { path: '**', component: NotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [
    SessionService
  ]
})
export class AppRoutingModule { }
