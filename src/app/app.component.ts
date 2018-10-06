import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datos = []; 
  title = 'compareApp';
  chartBest : any = null;
  chartPromediate : any = null;
  chartWorst : any = null;
  chartRealtime : any = null;
  dataFirst = {
    label: "",
            data: this.datos,
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

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data)
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json")
  }

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

  bubble() : number { 

    var size = myArr.length;
    let ini = new Date().getTime();
    for( var pass = 1; pass < size; pass++ ){ // outer loop
      for( var left = 0; left < (size - pass); left++){ // inner loop
        var right = left + 1;
        if( myArr[left] > myArr[right] ){
          swapburbuj(myArr, left, right);
        }
      }
    }
    let fin = new Date().getTime();
            
    let time = fin - ini;
    return time;
  }

  insertion() : number {

    return 1;
  }

  selection() : number {

    return 1;
  }


}
