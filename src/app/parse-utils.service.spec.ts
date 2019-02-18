import { TestBed } from '@angular/core/testing';

import { ParseUtilsService, subsystemDefinitions } from './parse-utils.service';

describe('ParseUtilsService', () => {
  let service: ParseUtilsService;
  beforeEach(() => service = new ParseUtilsService());

  it('should be created', () => {
    service = TestBed.get(ParseUtilsService);
    expect(service).toBeTruthy();
  });
  
  it('should create an enum object from a TypeScript line', () => {
    service = TestBed.get(ParseUtilsService);
    const enumLine = '    ItuG721Adpcm = 101, // MOPS value';
    const enumObj = ParseUtilsService.typeScriptEnumValueFromLine(enumLine, 555555, subsystemDefinitions['mccx']);
    expect(enumObj).toBeTruthy();
    expect(enumObj.value === 101).toBeTruthy();
    expect(enumObj.valueName === 'ItuG721Adpcm').toBeTruthy();
    expect(enumObj.description === 'MOPS value').toBeTruthy();
  });
  
  it('should creat an enum object from a JAVA line', () => {
    service = TestBed.get(ParseUtilsService);
    const javaLine = '    NAME_VC_4_4_C("VC_4_4_C description", VC_4, LinkTechTypeGroupEnum.SDH, 9, 123, false),';
    const enumObj = ParseUtilsService.javaEnumValueFromLine(javaLine, 555555, subsystemDefinitions['ugs']);
    expect(enumObj).toBeTruthy();
    expect(enumObj.value === 9).toBeTruthy();
    expect(enumObj.valueName === 'NAME_VC_4_4_C').toBeTruthy();
    expect(enumObj.description === 'VC_4_4_C description').toBeTruthy();
  });
});
