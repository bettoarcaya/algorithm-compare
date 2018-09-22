import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compareApp';
  chartBest : any = null;
  chartPromediate : any = null;
  chartWorst : any = null;
  chartRealtime : any = null;
  dataFirst = {
    label: "",
            data: [ 100, 200, 300 ],
            lineTension: 0.3,
            fill: false,
            borderColor: 'red',
            backgroundColor: 'transparent',
            pointBorderColor: 'red',
            pointBackgroundColor: 'lightgreen',
            pointRadius: 5,
            pointHoverRadius: 15,
            pointHitRadius: 30,
            pointBorderWidth: 2,
            pointStyle: 'rect'
  };
  speedData = {
    labels: [ 
      "100", 
      "200", 
      "300", 
      "400", 
      "500", 
      "600", 
      "700",
      "800",
      "900",
      "1000"
    ],
    datasets: [this.dataFirst]     
  };
  chartOptions = {
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: 'black'
      }
    }
  };

  ngOnInit() : void {
    
    this.chartBest = new Chart('best', {
      type: 'line',
      data: this.speedData,
      options: this.chartOptions
    });

    this.chartPromediate = new Chart('promediate', {
      type: 'line',
      data: this.speedData,
      options: this.chartOptions
    });

    this.chartWorst = new Chart('worst', {
      type: 'line',
      data: this.speedData,
      options: this.chartOptions
    });
  }


}
