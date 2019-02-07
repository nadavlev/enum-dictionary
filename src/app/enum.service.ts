import { Injectable } from '@angular/core';
import { GlobalEnumModel } from './enum.model';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  private enums: GlobalEnumModel;
  private tableData: any[];
  private columns;

  constructor() {
    this.enums = this.initEnums();
    const {columns, tableData} = this.prepareStructureForTable(this.enums);
    this.columns = columns;
    this.tableData = tableData;
  }

  public getAllEnums(): GlobalEnumModel {
    return this.enums;
  }
  
  public getEnumTableColumns() {
    return this.columns;
  }
  
  public getTableData() {
    return this.tableData;
  }
  
  public prepareStructureForTable(enums) {
    let columns = ['enumName'];
    const tableData = [];
    for (const e of Object.keys(enums)) {
      const enumObject = {enumName: e};
      Object.keys(enums[e].systemExistence).forEach(col => {
        columns.push(col);
        enumObject[col] = enums[e].systemExistence[col].name;
      });
      tableData.push(enumObject);
    }
    columns = columns.reduce((unique, item) => {
      return unique.includes(item) ? unique : [... unique, item];
    }, []);
    return {columns, tableData};
  }
  
  private initEnums() {
    return {
      enum_a: {
        systemExistence: {
          mccx: {name: 'asd', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
          ugs: {name: 'fds', description: 'this is a description', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
          mls: {name: 'fds', values: [{value: 1, valueName: 'val_1', description: 'this is a description for a value'}, {value: 2, valueName: 'val_2'}]},
          mops: {name: 'adf', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]}
        },
        description: 'this is the first enum'
      },
      enum_b: {
        systemExistence: {
          mccx: {name: 'gfd', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
          ugs: {name: 'hd', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
          mops: {name: 'envnum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]}
        },
        description: 'this is the second enum'
      },
      enum_c: {
        systemExistence: {
          ugs: {name: 'enjghum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
          mls: {name: 'n', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
          VTPS: {name: 'zxcv', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
          mops: {name: 'jf', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]}
        },
        description: 'this is the first enum'
      }
    };
  }
}