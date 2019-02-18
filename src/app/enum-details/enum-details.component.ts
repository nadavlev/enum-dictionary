import { Component, OnInit } from '@angular/core';
import { EnumService } from '../enum.service';
import { IGlobalEnum, ISystemExistence } from '../enum.model';
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
  public displayColumns: string[];
  public tableData;
  public activeSubSystem = '';
  public inputEnum: string;
  public enumDetails: IGlobalEnum;
  
  constructor(private route: ActivatedRoute, private enumService: EnumService, private utils: ParseUtilsService, public dialog: MatDialog) { }
  
  
  ngOnInit() {
    this.currentEnum = this.route.snapshot.paramMap.get('enumName');
    this.enumDetails = this.enumService.getEnumDetails(this.currentEnum);
    this.tableDataFromSystemExistance(this.enumDetails.systemExistence);
  }
  public showAddEnum(subsystemName: string): void {
    this.activeSubSystem = subsystemName;
    const dialogDRef = this.dialog.open(EnumDetailsInsertDialogComponent, {
      width: '600px',
      data: {activeSubSystem: this.activeSubSystem}
    });
    dialogDRef.afterClosed().subscribe(result => {
      if (this.enumIsCandidateForParsing(result)) {
        this.inputEnum = result;
        const {values, name, description} = this.utils.parseEnums(this.inputEnum, this.activeSubSystem);
        this.enumDetails.systemExistence[this.activeSubSystem].values = values;
        // this.enumDetails.systemExistence[this.activeSubSystem].description = description;
        // this.enumDetails.systemExistence[this.activeSubSystem].name = name;
        this.tableDataFromSystemExistance(this.enumDetails.systemExistence);
      }
      this.clearActiveSystem();
    });
  }
  
  private enumIsCandidateForParsing(inuptEnum: string): boolean {
    return this.inputEnum.trim().length > 0
  }
  
  private tableDataFromSystemExistance(systemExistence: ISystemExistence):void {
    const {columns, tableData} = this.enumService.prepareStructureForEnumDetailsTable(systemExistence);
    this.displayColumns = columns;
    this.tableData = new MatTableDataSource(tableData);
  }
  
  private clearActiveSystem(): void{
    this.activeSubSystem = '';
  }
  // public saveEnum(subsystemName: string) {
  //
  // }
}
