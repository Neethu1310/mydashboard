import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  Highcharts = Highcharts;
  chartOptions ={ }

constructor(){
  this.chartOptions={
    chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45
      },
      backgroundColor:'black'


  },
  title: {
      text: 'Sales in 2020 by Districts',
      align: 'center'
  },
  subtitle: {
      text: 'Sales&Productions',
      align: 'center'
  },
  plotOptions: {
      pie: {
          innerSize: 100,
          depth: 45
      }
  },
  credits:{
    enabled:false
  },
  series: [{
      name: 'Sales',
      data: [
          ['Thrissur', 16],
          ['Ernamkulam', 12],
          ['Thiruvanathapuram', 8],
          ['Kozhikode', 8],
          ['Palakkad', 8],
          ['Alappuzha', 6],
          ['Malappuram', 7],
          ['Kannur', 4],
          ['Other', 3]

      ]
  }]
  }
}

}
