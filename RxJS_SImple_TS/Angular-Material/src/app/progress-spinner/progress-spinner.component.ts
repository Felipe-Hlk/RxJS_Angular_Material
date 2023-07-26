import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { concat, interval, map, take, takeWhile, tap } from 'rxjs';


@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  public loadingPercent = 0;
  public queryValue = 0;
  public currentPlayBack = 0;
  public queryMode: ProgressBarMode = 'query';

  ngOnInit(): void {
    this.loadingProgress(500)
    .subscribe(i => this.loadingPercent = i);

    this.loadingProgress(350)
    .subscribe(i => this.currentPlayBack = i);

    concat(
      interval(2000)
        .pipe(
          take(1),
          tap(_ => (this.queryMode = 'determinate'))
        ),
      this.loadingProgress(500)
    ).subscribe(i => this.queryValue = i);

  }

  loadingProgress(speed: number){
    return interval(speed)
    .pipe(
      map( i => i * 10),
      takeWhile( i => i <= 100)
    )
  }

}
