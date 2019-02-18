import { TestBed } from '@angular/core/testing';

import { EnumService } from './enum.service';

describe('EnumService', () => {
  let service: EnumService;
  beforeEach(() => {
    //service = new EnumService();
    TestBed.configureTestingModule({providers: [EnumService]})
  });

  it('should be created', () => {
    service = TestBed.get(EnumService);
    expect(service).toBeTruthy();
  });

  it('should return the initial model', () => {
    service = TestBed.get(EnumService);
    expect(service.getAllEnums()).toBeTruthy();
  });
  
  it('should return the columns describing all subsystems', () => {
    service = TestBed.get(EnumService);
    expect(service.getEnumTableColumns()).toBeTruthy();
  });

  it('should return the data for the main enums subsystems', () => {
    service = TestBed.get(EnumService);
    expect(service.getTableData()).toBeTruthy();
  });
  
  it('should return the mock initial enums', () => {
    service = TestBed.get(EnumService);
    const allEnumsColumns = Object.keys(service.getAllEnums());
    expect(service.getEnumDetails(allEnumsColumns[1])).toBeTruthy();
  });
  
  it('should prepare data by Enum to be shown in details page', () => {
    service = TestBed.get(EnumService);
    const allEnums = service.getAllEnums();
    const allEnumsKeys = Object.keys(service.getAllEnums());
    const exampleEnum = allEnums[allEnumsKeys[2]];
    expect(service.prepareStructureForEnumDetailsTable(exampleEnum.systemExistence)).toBeTruthy();
  });
  
});
