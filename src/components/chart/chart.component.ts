import { Component, OnChanges, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';
import { Color } from './../../directives/base-chart.directive';

@Component({
  selector: 'nts-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.scss'],
})
export class NtsChartComponent implements OnChanges {

  @Input() chartTitle: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() type: 'line' | 'bar' | 'pie' | 'radar' | 'doughnut' | 'polarArea' | 'horizontalBar';

  @Input() series: Array<{ label: string, data: [number], color: Color }> = [];
  @Input() labels: string[] = [];
  @Input() options = {};

  @Output() chartHover = new EventEmitter();
  @Output() chartClick = new EventEmitter();

  tooltip: any = {};

  defaultOptions = {
    maintainAspectRatio: false,
    tooltips: { enabled: false, custom: tooltip => this.tooltip = tooltip }
  };

  ngOnChanges(changes) {
    if (changes.type || changes.options) {
      this.options = Object.assign(this.options, this.defaultOptions);
    }
  }

  constructor(private view: ViewContainerRef) {

  }
}
