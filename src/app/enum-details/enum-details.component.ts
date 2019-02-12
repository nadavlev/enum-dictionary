import { Component, OnInit } from '@angular/core';
import { EnumService } from '../enum.service';
import { IGlobalEnum } from '../enum.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatTableDataSource } from '@angular/material';
import * as _ from 'lodash';
import { ParseUtilsService } from '../parse-utils.service';
import { EnumDetailsInsertDialogComponent } from '../enum-details-insert-dialog/enum-details-insert-dialog.component';

export interface IDialogData {
  activeSubSystem: string
}

@Component({
  selector: 'app-enum-details',
  templateUrl: './enum-details.component.html',
  styleUrls: ['./enum-details.component.scss']
})
export class EnumDetailsComponent implements OnInit {
  private currentEnum: string;
  private displayColumns: string[];
  public tableData;
  private activeSubSystem = '';
  public inputEnum: string;
  
  constructor(private route: ActivatedRoute, private enumService: EnumService, private utils: ParseUtilsService, public dialog: MatDialog) { }
  
  private enumDetails: IGlobalEnum;
  
  ngOnInit() {
    this.currentEnum = this.route.snapshot.paramMap.get('enumName');
    this.enumDetails = this.enumService.getEnumDetails(this.currentEnum);
    const {columns, tableData} = this.enumService.prepareStructureForEnumDetailsTable(_.get(this, 'enumDetails.systemExistence', {}));
    this.displayColumns = columns;
    this.tableData = new MatTableDataSource(tableData);
  }
  public showAddEnum(subsystemName: string): void {
    this.activeSubSystem = subsystemName;
    const dialogDRef = this.dialog.open(EnumDetailsInsertDialogComponent, {
      width: '600px',
      data: {activeSubSystem: this.activeSubSystem}
    });
    dialogDRef.afterClosed().subscribe(result => {
      this.inputEnum = result;
      this.parseEnum();
    });
  }
  
  public parseEnum() {
    // take the clean enum
    if (!this.inputEnum) {
      this.activeSubSystem = '';
      
      return;
    }
    const {values, name, description} = this.utils.parseEnums(this.inputEnum, this.activeSubSystem);
    this.enumDetails.systemExistence[this.activeSubSystem].values = values;
    // this.enumDetails.systemExistence[this.activeSubSystem].description = description;
    // this.enumDetails.systemExistence[this.activeSubSystem].name = name;
    const {columns, tableData} = this.enumService.prepareStructureForEnumDetailsTable(_.get(this, 'enumDetails.systemExistence', {}));
    this.displayColumns = columns;
    this.tableData = tableData;
  }
  public saveEnum(subsystemName: string) {
  
  }
}
