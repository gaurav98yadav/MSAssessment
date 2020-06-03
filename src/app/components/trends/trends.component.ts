import { Component, OnInit } from '@angular/core';
import {ChartService} from 'src/app/providers/chart.service';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})

export class TrendsComponent implements OnInit {
  public data: any = []
  public dataX: Label[] =['Gaurav','Yadav']
  public dataY: number[] = [100,200];
  constructor(public chartservice: ChartService) {
    this.chartservice.fetchData().subscribe((details) => {
      this.data=details;
      console.log(this.data);
      this.dataX=this.data['courses'].map(x =>x['course']);
      this.dataY=this.data['courses'].map(x =>x['average']);
    
   });
  }
test(a)
{
  if(a.index==0)
  {
    this.dataX=this.data['courses'].map(x =>x['course']);
    this.dataY=this.data['courses'].map(x =>x['average']);
  }
  if(a.index==1)
  {

    this.dataX=this.data['locations'].map(x =>x['location']);
    this.dataY=this.data['locations'].map(x =>x['average']);
  }
  if(a.index==2)
  {
    console.log("Lets Change");
    this.dataX=this.data['years'].map(x =>x['year']);
    this.dataY=this.data['years'].map(x =>x['average']);
  }
}
  ngOnInit() {
  }

}
