import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public displayColumns: string[];
  public tableData: any[];

  title = 'enum-dictionary';
  enums = {
    enum_a: {
      systemExistence: {
          mccx: {name: 'enum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
          ugs: {name: 'enum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
          mls: {name: 'enum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
          mops: {name: 'enum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]}
        },
      description: 'this is the first enum'
    },
    enum_b: {
      systemExistence: {
        mccx: {name: 'enum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
        ugs: {name: 'enum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
        mops: {name: 'enum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]}
      },
      description: 'this is the second enum'
    },
    enum_c: {
      systemExistence: {
        ugs: {name: 'enum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
        mls: {name: 'enum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
        VTPS: {name: 'enum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]},
        mops: {name: 'enum_a', values: [{value: 1, valueName: 'val_1'}, {value: 2, valueName: 'val_2'}]}
      },
      description: 'this is the first enum'
    }
  };
  ngOnInit(): void {
    this.displayColumns = this.getMainEnumTableColumns();
  }
  
  public getMainEnumTableColumns() {
    const columns = ['enumName'];
    let tempData = [];
    for (const e of Object.keys(this.enums)) {
      const enumObject = {enumName: e};
      Object.keys(this.enums[e].systemExistence).forEach(col => {
        columns.push(col);
        enumObject[col] = true;
      });
      tempData.push(enumObject);
    }
    this.tableData = tempData;
    return columns.reduce((unique, item) => {
      return unique.includes(item) ? unique : [... unique, item];
    }, []);
  }
}
