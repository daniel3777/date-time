import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeComponent } from './date-range.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DateRangeComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  exports: [
    DateRangeComponent,
  ],
})
export class DateRangeModule { }
