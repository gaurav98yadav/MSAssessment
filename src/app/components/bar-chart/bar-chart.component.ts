import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {

  @Input() dataX:Label[];
  @Input() dataY:number[];
  barChartOptions: ChartOptions = {
    responsive: true,
    scales : {
      yAxes: [{
         ticks: {
            beginAtZero : true
          }
      }] 
    }
  };

  barChartLabels: Label[] = this.dataX;
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  myLabels = [];
  myExpense = [];

  barChartData: ChartDataSets[] = [
    { data: this.dataY, label: 'Average Marks / Courses' }
  ];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    console.log(this.dataX);
    console.log(this.dataY);
  }
}
