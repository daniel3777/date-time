import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DateRange } from 'src/app/modles/dateRange';

@Component({
  selector: 'danfa-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent {

 
  @Output() rangeSelected = new EventEmitter<DateRange>();

  @Input() dateRange = [];
  @Input() allowFuture = false;

  today = new Date();
  selectedDate  = new DateRange();

  selectRange() {
    this.selectedDate.timeFrom = this.dateRange[ 0 ];
    this.selectedDate.timeTo = this.dateRange[ 1 ];
    console.log(this.selectedDate);
  }
}
