import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; // Impede que o dialog seja fechado ao clicar fora dele
    // dialogConfig.width = '500px'; // Você também pode definir outras configurações do dialog, como a largura

    this.dialog.open(DialogModalComponent, dialogConfig);
  }

}
