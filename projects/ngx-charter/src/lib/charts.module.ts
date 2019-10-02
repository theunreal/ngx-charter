import { NgModule } from '@angular/core';
import {ChartComponent} from './chart.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule
  ],
  exports: [ChartComponent]
})
export class ChartsModule { }
