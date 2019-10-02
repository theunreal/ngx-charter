import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import {Chart, ChartConfiguration} from 'chart.js';

@Component({
  selector: 'ngx-charter',
  template: `
      <div *ngIf="options">
          <canvas #canvas 
                  [attr.width]="width ? width : null"
                  [attr.height]="height ? height : null">
              {{ chart }}</canvas>
      </div>
  `,
  styles: []
})
export class ChartComponent implements AfterViewInit, OnDestroy {

  chart: Chart;
  @Input() options: ChartConfiguration;
  @Input() height: number = null;
  @Input() width: number = null;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;

  @Output() onDataSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cdr: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    if (!this.options) {
      console.error('Failed to load chart: please provide options to the ngx-charter element.');
      return;
    }

    if (!this.options.data.datasets) {
      console.warn('No datasets provided to chart options');
      return;
    }

    this.chart = new Chart(this.canvas.nativeElement, this.options);
    this.cdr.detectChanges();

    // Events
    this.canvas.nativeElement.onclick = (evt) => this.onDataSelect.emit(this.chart.getElementsAtEvent(evt)[0]);
  }

  update() {
    this.chart.update();
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

}
