import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

     Highcharts = Highcharts;
    chartOptions ={ }

    constructor(){
     this. chartOptions={
      chart: {
        type: 'areaspline',
        backgroundColor:'black'

    },
    title: {
        text: ' Yearl Evaluation of Profit and Loss, 2000 - 2020',
        align: 'center',
     },
    subtitle: {
        text: 'Sales&Productions',
        align: 'center'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 120,
        y: 70,
        floating: true,
        borderWidth: 1,
        backgroundColor:
        'white'
    },
    xAxis: {
        plotBands: [{ // Highlight the two last years
             from: 2019,
            to: 2020,
            color: 'rgba(68, 170, 213, .2)'
        }]
    },
    yAxis: {
        title: {
            text: 'Profit and Loss'
        }
    },
    tooltip: {
        shared: true,
        headerFormat: '<b>Sales&Productions  {point.x}</b><br>'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
            pointStart: 2000
        },
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Loss',
        data:
            [
                38000,
                37300,
                37892,
                38564,
                36770,
                36026,
                34978,
                35657,
                35620,
                35971,
                36409,
                36435,
                34643,
                34956,
                33199,
                31136,
                30835,
                31611,
                30666,
                30319,
                31766
            ]
    }, {
        name: 'Profit',
        data:
            [
                22534,
                23599,
                24533,
                25195,
                25896,
                27635,
                29173,
                32646,
                35686,
                37709,
                39143,
                36829,
                35031,
                36202,
                35140,
                33718,
                37773,
                42556,
                43820,
                46445,
                50048
            ]
    }]
     }
    
     HC_exporting(Highcharts);
    } 
             
         
}
