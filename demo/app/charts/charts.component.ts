import { Component } from '@angular/core';

@Component({
    selector: 'app-charts',
    templateUrl: 'charts.component.html',
})
export class ChartsComponent {
    baseSeries = [
        { label: 'Serie 1', data: [12, 19, 3, 5, 2, 3] },
        { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1] }
    ];
    baseLabels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6'];
    baseOptions = {};

    lineSeries = [
        { label: 'Serie 1', data: [12, 19, 3, 5, 2, 3], fill: false },
        { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1], fill: false }
    ];
    mixedSeries = [
        { label: 'Serie 1', data: [12, 19, 3, 5, 2, 3], type: 'bar' },
        { label: 'Serie 2', data: [22, 12, 20, 10, 5, 1], type: 'line' }
    ];
    stackOptions = { scales: { xAxes: [{ stacked: true }], yAxes: [{ stacked: true }] } };
}
