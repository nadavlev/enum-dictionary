import { Component, OnInit } from '@angular/core';
import { EnumService } from '../enum.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enums',
  templateUrl: './enums.component.html',
  styleUrls: ['./enums.component.scss']
})
export class EnumsComponent implements OnInit {
  public displayColumns: string[];
  public tableData: any[];
  private enums;
  private enumName: string;
  
  constructor(private route: ActivatedRoute, private enumsService: EnumService) { }
  
  ngOnInit(): void {
    this.enums = this.enumsService.getAllEnums();
    this.displayColumns = this.enumsService.getEnumTableColumns();
    this.tableData = this.enumsService.getTableData();
    this.enumName = this.route.snapshot.paramMap.get('enumName');
  }
}
