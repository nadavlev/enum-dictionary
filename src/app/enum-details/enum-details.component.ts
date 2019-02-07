import { Component, OnInit } from '@angular/core';
import { EnumService } from '../enum.service';
import { GlobalEnum } from '../enum.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enum-details',
  templateUrl: './enum-details.component.html',
  styleUrls: ['./enum-details.component.scss']
})
export class EnumDetailsComponent implements OnInit {
  private currentEnum: string;
  private displayColumns: string[];
  public tableData;
  
  constructor(private enumService: EnumService,
              private route: ActivatedRoute) { }
  private enumDetails: GlobalEnum;
  ngOnInit() {
    this.currentEnum = this.route.snapshot.paramMap.get('enumName');
    this.enumDetails = this.enumService.getEnumDetails(this.currentEnum);
    const {columns, tableData} = this.enumService.prepareStructureForEnumDetailsTable(this.enumDetails.systemExistence);
    this.displayColumns = columns;
    this.tableData = tableData;
  }

}
