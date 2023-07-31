import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(AppSnackExampleComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

@Component({
  selector: 'app-snack-example',
  template: `
    <span class="example-snack">
        Agendamento Realizado com Sucesso!!!
    </span>
  `,
  styles: [`
    .example-snack {
      color: green;
    }
  `],
})
export class AppSnackExampleComponent {
  constructor(private snackBarRef: MatSnackBarRef<AppSnackExampleComponent>) { }
}
