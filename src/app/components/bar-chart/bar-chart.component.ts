import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';



@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: Label[] = ['Banglaore', 'Chennai', 'Delhi', 'Gurgaon', 'Hyderabad', 'Mumbai', ''];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  myLabels = [];
  myExpense = [];

  barChartData: ChartDataSets[] = [
    { data: [17, 10, 8, 12, 6, 2, 0], label: 'Courses / Location' }
  ];

  constructor(public http: HttpClient) { }

  ngOnInit() {

  }

}
