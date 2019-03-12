import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DateRangeModule } from 'src/app/common/date-range/date-range.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DateRangeModule
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
