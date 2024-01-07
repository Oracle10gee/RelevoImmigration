import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
// import {DataLabelsPlugin} from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
   // Radar
   public radarChartOptions: ChartConfiguration['options'] = {};
   public radarChartLabels: string[] = [
     '1',
     '3',
     '5',
     '6',
     '8',
     '10',
     '14',
   ];
 
   public radarChartData: ChartData<'radar'> = {
     labels: this.radarChartLabels,
     datasets: [
       { data: [65, 59, 90, 81, 56, 55, 40], label: 'Male' },
       { data: [28, 48, 40, 19, 96, 27, 100], label: 'Female' },
     ],
   };
   public radarChartType: ChartType = 'radar';
 
   // events
   public chartClicked({
     event,
     active,
   }: {
     event: ChartEvent;
     active: object[];
   }): void {
     console.log(event, active);
   }
 
   public chartHovered({
     event,
     active,
   }: {
     event: ChartEvent;
     active: object[];
   }): void {
     console.log(event, active);
   }
}