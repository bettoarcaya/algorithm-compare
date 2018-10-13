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
  bestData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100 ]; 
  mediumData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 86, 75, 51, 9, 44, 61, 67, 62, 48, 25, 92, 15, 10, 6, 25, 98, 7, 8, 15, 95, 67, 73, 86, 2, 41, 57, 83, 30, 47, 85, 98, 27, 31, 3, 48, 12, 98, 72, 44, 85, 97, 37, 75, 35, 74, 70, 94, 16, 37, 62];
  worstData = [81, 39, 88, 14, 28, 10, 18, 47, 34, 31, 59, 80, 81, 32, 6, 44, 39, 85, 98, 91, 52, 11, 61, 98, 10, 24, 36, 51, 93, 5, 84, 8, 40, 46, 4, 75, 23, 68, 34, 49, 50, 75, 5, 12, 5, 28, 18, 19, 60, 96, 63, 36, 60, 38, 51, 35, 71, 1, 78, 71, 28, 69, 1, 60, 75, 84, 78, 50, 3, 26, 93, 65, 37, 66, 28, 69, 31, 80, 72, 53, 47, 77, 73, 40, 84, 89, 72, 52, 61, 17, 58, 38, 63, 32, 48, 7, 44, 8, 57, 97];
  title = 'compareApp';
  chartBest : any = null;
  chartPromediate : any = null;
  chartWorst : any = null;
  chartRealtime : any = null;
  dataFirst = null;
  dataFirstB = {
    label: "",
            data: this.bubble(this.bestData),
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
  dataFirstM = {
    label: "",
            data: this.bubble(this.mediumData),
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
  dataFirstW = {
    label: "",
            data: this.bubble(this.worstData),
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
  speedDataB = {
    labels: [ 
      "0",
      "1", 
      "2", 
      "3", 
      "4", 
      "5", 
      "6", 
      "7",
      "8",
      "9",
      "10"
    ],
    datasets: [this.dataFirstB]     
  };
  speedDataM = {
    labels: [ 
      "0",
      "1", 
      "2", 
      "3", 
      "4", 
      "5", 
      "6", 
      "7",
      "8",
      "9",
      "10"
    ],
    datasets: [this.dataFirstM]     
  };
  speedDataW = {
    labels: [ 
      "0",
      "1", 
      "2", 
      "3", 
      "4", 
      "5", 
      "6", 
      "7",
      "8",
      "9",
      "10"
    ],
    datasets: [this.dataFirstW]     
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

  constructor(private http: HttpClient) {}

  ngOnInit() : void {
    
    this.chartBest = new Chart('best', {
      type: 'line',
      data: this.speedDataB,
      options: this.chartOptions
    });

    this.chartPromediate = new Chart('promediate', {
      type: 'line',
      data: this.speedDataM,
      options: this.chartOptions
    });

    this.chartWorst = new Chart('worst', {
      type: 'line',
      data: this.speedDataW,
      options: this.chartOptions
    });
  }

  bubble(data) : any { 

    var size = data.length;
    let ini = new Date().getTime();
    for( var pass = 1; pass < size; pass++ ){ // outer loop
      for( var left = 0; left < (size - pass); left++){ // inner loop
        var right = left + 1;
        if( data[left] > data[right] ){
          this.swapburbuj(data, left, right);
        }
      }
    }
    let fin = new Date().getTime();
            
    let time = fin - ini;
    let response = this.descomposition(time);
    return response;
  }

  swapburbuj(myArr, indexOne, indexTwo) : any{
    var tmpVal = myArr[indexOne];
    myArr[indexOne] = myArr[indexTwo];
    myArr[indexTwo] = tmpVal;
    return myArr;
  }

  descomposition(time) : any{
    let response = [];
    if(time < 0){
      response = [0]
      return response
    }
    for(let i = 0; i <= time; i++){
      response.push(i);
    }
    return response;
  }

  /*selection() : number {
    var size = myArr.length;
    let ini = new Date().getTime();
    for( var slot = 0; slot < size -1; slot ++ ){ // outer loop
        var smallest = slot;
      for( var check = slot + 1; check < size; check++ ){ // inner loop
        if( myArr[check] < myArr[smallest] ){
          smallest = check;
        }
      }
      this.swapselection( myArr, smallest, slot );
    }
    let fin = new Date().getTime();
            
    let time = fin - ini;
    return time;
  }

  swapselection(myArr, indexOne, indexTwo){
    if( indexOne == indexTwo ){
        return myArr;
    }
    var tmpVal = myArr[indexOne];
    myArr[indexOne] = myArr[indexTwo];
    myArr[indexTwo] = tmpVal;
    return myArr;
  }*/


}
