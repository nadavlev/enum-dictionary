import { Component, OnInit } from '@angular/core';
import { EnumService } from '../enum.service';
import { GlobalEnum } from '../enum.model';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import * as _ from 'lodash';
import { ParseUtilsService } from '../parse-utils.service';

@Component({
  selector: 'app-enum-details',
  templateUrl: './enum-details.component.html',
  styleUrls: ['./enum-details.component.scss']
})
export class EnumDetailsComponent implements OnInit {
  private currentEnum: string;
  private displayColumns: string[];
  public tableData;
  private showImportInput = false;
  private activeSubSystem = '';
  public inputEnum: string;
  constructor(private route: ActivatedRoute, private enumService: EnumService, private utils: ParseUtilsService) { }
  private enumDetails: GlobalEnum;
  ngOnInit() {
    this.currentEnum = this.route.snapshot.paramMap.get('enumName');
    this.enumDetails = this.enumService.getEnumDetails(this.currentEnum);
    const {columns, tableData} = this.enumService.prepareStructureForEnumDetailsTable(_.get(this, 'enumDetails.systemExistence', {}));
    this.displayColumns = columns;
    this.tableData = new MatTableDataSource(tableData);
  }
  public showAddEnum(subsystemName: string) {
    this.showImportInput = true;
    this.activeSubSystem = subsystemName;
  }
  public saveToModel(event) {
    this.inputEnum = event.target.value;
  }
  public parseEnum() {
    // take the clean enum
    if (!this.inputEnum) {
      this.showImportInput = false;
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
    this.showImportInput = false;
  }
  public saveEnum(subsystemName: string) {
  
  }
}
