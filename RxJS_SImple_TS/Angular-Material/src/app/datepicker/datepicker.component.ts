import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

import { MatCalendarCellClassFunction, MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent {

  constructor( private plataform: Platform ) {}

  get isTouchDevice() {
    return this.plataform.ANDROID || this.plataform.IOS
  }


}
