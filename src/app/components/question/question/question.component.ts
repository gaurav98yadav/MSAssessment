import { Component, OnInit } from '@angular/core';
import { QuestionanswerService } from 'src/app/providers/questionanswer.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SessionStorageService, LocalStorageService } from 'angular-web-storage';
import { AnswerService } from 'src/app/providers/answerService/answer.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/providers/questionService/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  AnswerForm = new FormGroup(
    {
      description: new FormControl("")
    }
  )
  commentForm = new FormGroup(
    {
      replies: new FormControl("")
    }
  )
  
  display = []
  question_answer = []
  upvotecolor = "black"
  downvotecolor = "black"
  answerupvotecolor = []
  answerdownvotecolor = []
  vote: number
  answervote: number
  textareadisplay = [];
  commentdisplay = [];
  answerareadisplay = [];
  textanswerarea = [];
  answerdisplay = [];
  commentedit = [];
  questionid: any;
  editdisplay = [];
  categories = ["HR", "Technical Stack"]
  Technical = ['Java', 'Python', 'Spring-Boot', 'Angular',
    'React-Js', 'Sql', 'Others']
  Hr = ['Recruitment', 'Training', 'Compensation', 'Perks', 'Others']
  danger = "none"
  subcategories = []
  subcategory: string = ""
  category: string = "";
  questions: string = "";
  description: string = "";
  categorydisplay = "none";
  subcatId=0;
  public data: any = [];
  commenteditdisplay = [];
  questiondisplay="none";
  constructor(public session: SessionStorageService,
    public localstorage: LocalStorageService,
    public questionanswerservice: QuestionanswerService,
    public answerservice: AnswerService,
    private router: Router,
    private route: ActivatedRoute,
    public questionservice: QuestionService,
    ) {

  }

  ngOnInit() {
    this.display.fill("none");
    this.vote = 0;
    this.answervote = 0;
    this.data = this.localstorage.get("1");
    console.log("question", this.data['empId']);
    this.route.paramMap.subscribe(paramMap => {
      this.questionid = paramMap.get('qId');
    })
    this.questionanswerservice.getQuestionanswerById(this.questionid).subscribe((details) => {
      this.question_answer.push(details);
      this.questions=this.question_answer[0].questionValue;
      this.description=this.question_answer[0].description;
      this.category="";
      this.subcategory="";
      console.log("question answer", this.question_answer[0])
      if(this.question_answer[0].empId===this.data.empId)
      {
        this.questiondisplay="block";
      }
      else
      {
        this.questiondisplay="none";
      }
      for (let question of this.question_answer[0].answerList) {
        if (question.empId === this.data['empId']) {
          this.editdisplay[question.empId] = "block"
        }
        else {
          this.editdisplay[question.empId] = "none"
        }
        this.answerareadisplay[question.answerId] = "none";
        this.answerdisplay[question.answerId] = "flex";
        for (let comment of question.listComments) {
          if (comment.empId === this.data['empId']) {
            this.commenteditdisplay[comment.empId] = "block"
          }
          else {
            this.commenteditdisplay[comment.empId] = "none"
          }

          this.textareadisplay[comment.commentId] = "none";
          this.commentdisplay[comment.commentId] = "flex";
        }

      }

    });
    if (!this.question_answer) {
      this.router.navigate(['/notfound'])
    }

  }
  upvote(id: number) {
    this.questionanswerservice.upvote(id, this.data['empId'], 1).subscribe((vote) => {
      this.question_answer[0].vote = vote;

    });
    this.upvotecolor = "orange"
    this.downvotecolor = "black"

  }
  downvote(id: number) {
    this.questionanswerservice.downvote(id, this.data['empId'], -1).subscribe((vote) => {
      this.question_answer[0].vote = vote;

    });
    this.downvotecolor = "orange"
    this.upvotecolor = "black"
  }
  answerupvote(id: number, ansid: number) {
    this.questionanswerservice.upanswervote(ansid, this.data['empId'], 1).subscribe((vote) => {
      this.question_answer[0].answerList[id].vote = vote;

    });
    this.answerupvotecolor[id] = "orange"
    this.answerdownvotecolor[id] = "black"

  }
  answerdownvote(id: number, ansid: number) {
    this.questionanswerservice.upanswervote(ansid, this.data['empId'], -1).subscribe((vote) => {
      this.question_answer[0].answerList[id].vote = vote;

    });
    this.answerdownvotecolor[id] = "orange"
    this.answerupvotecolor[id] = "black"

  }
  onSubmit(qid) {
    console.log(qid);
    this.answerservice.addAnswer(6, this.AnswerForm.value.description, qid, this.data['empId']).subscribe((details) => {
      this.question_answer[0].answerList = details;
      console.log("question answer", this.question_answer)
      for (let question of this.question_answer[0].answerList) {
        this.answerareadisplay[question.answerId] = "none";
        this.answerdisplay[question.answerId] = "flex";

      }
      window.location.reload();
    });
    console.log("clicked");
  }
  showcomment(id: number) {
    if (this.display[id] === "none" || this.display[id] == undefined) {
      this.display[id] = "block";
    }
    else {
      this.display[id] = "none";
    }
  }
  onReply(answerId: number, index: number) {
    console.log(answerId, index);
    this.answerservice.addComments(this.data['empId'], answerId, this.commentForm.value.replies).subscribe((comment) => {

      this.question_answer[0].answerList[index].listComments = comment;
      console.log("question answer", this.question_answer)
      this.display[index] = "none";
      for (let question of this.question_answer[0].answerList) {
        for (let comment of question.listComments) {
          this.textareadisplay[comment.commentId] = "none";
          this.commentdisplay[comment.commentId] = "flex";
        }

      }
      window.location.reload();

    });
  }

  editcomment(index: number, comment: String) {
    this.commentedit[index] = comment;
    this.textareadisplay[index] = "block";
    this.commentdisplay[index] = "none";

  }
  sendanswer(answerId: number, answerValue: String) {
    console.log(answerId);
    this.textanswerarea[answerId] = answerValue;
    this.answerareadisplay[answerId] = "block";
    this.answerdisplay[answerId] = "none";

  }
  sendcomment(commentId: number, answerId: number, commentValue: String) {
    console.log(commentId, this.commentedit[commentId], commentValue)
    this.questionanswerservice.changecomment(commentId, this.commentedit[commentId]).subscribe(() => {

      commentValue = this.commentedit[commentId];
      window.location.reload();


    });

  }
  editanswer(answerId: number) {
    this.questionanswerservice.changeanswer(answerId, this.textanswerarea[answerId]).subscribe(() => {
      for (let answer of this.question_answer[0].answerList) {
        if (answer.answerId == answerId) {
          answer.answerValue = this.textanswerarea[answerId];
          this.textanswerarea[answerId] = "";
          this.answerareadisplay[answerId] = "none";
          this.answerdisplay[answerId] = "flex";
        }
      }
    });

  }
  
  OncatChange(item: string) {
    console.log(item)
    if (item === "HR") {
      this.subcategories = this.Hr
      this.subcategory = this.Hr[0];
    }
    else {
      this.subcategories = this.Technical
      this.subcategory = this.Technical[0];
    }
  }
  OnsubcatChange(item:string)
  {
    this.subcategory = item
  }
  postnewquestion() {
    if (this.questions === "" || this.category === "" || this.subcategory === "" || this.description === "") {
      this.danger = "block";
    }
    else {
      this.danger = "none";

      if(this.category==="HR")
      {
        if(this.subcategory==="Others")
        {
          this.subcatId=11

        }
        else{
        this.subcatId=this.Technical.length+this.Hr.indexOf(this.subcategory);
        }
      }
      else{
        if(this.subcategory==="Others")
        {
          this.subcatId=11

        }
        else{
          this.subcatId=1+this.Technical.indexOf(this.subcategory);
        }
      }
      this.questionservice.updateQuestion(this.question_answer[0].qId, this.questions, this.description, this.subcatId).subscribe((res) => {
        this.router.navigate(['/home']).then(()=>{
          this.questions = "";
          this.category = "";
          this.subcategory = "";
          this.description = "";
          window.location.reload();
        })
        
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

}

