
export class DateRange {

  name: string;
  timeTo: string;
  timeFrom: string;

  constructor(dataName?: string, dataTimeFrom?: string, dataTimeTo?: string) {
    this.name = dataName;
    this.timeTo = dataTimeTo;
    this.timeFrom = dataTimeFrom;
  }
}
