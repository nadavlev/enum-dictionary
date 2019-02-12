import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData } from '../enum-details/enum-details.component';

@Component({
  selector: 'app-enum-details-insert-dialog',
  templateUrl: './enum-details-insert-dialog.component.html',
  styleUrls: ['./enum-details-insert-dialog.component.scss']
})
export class EnumDetailsInsertDialogComponent implements OnInit {
  private inputEnum: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogData) { } // public dialogRef: MatDialogRef<EnumDetailsInsertDialogComponent>,

  ngOnInit() {
  
  }
  public saveToModel(event) {
    this.inputEnum = event.target.value;
  }
}
