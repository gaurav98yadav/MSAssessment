import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  public pieChartLabels: Label = ['Negative', 'Positive', 'Moderate'];
  public pieChartData: SingleDataSet = [3, 70, 27];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  constructor(public http: HttpClient) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {

  }
}
