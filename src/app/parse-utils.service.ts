import { Injectable } from '@angular/core';
import { EnumLocal, enumParseType, EnumValue, SubSustemDefinitions, SubSystemDefinition } from './enum.model';

@Injectable({
  providedIn: 'root'
})
export class ParseUtilsService {

  constructor() {}

  static typeScriptEnumValueFromLine(line: string, index: number, parseInfoObject: SubSystemDefinition): EnumValue {
    const tempValue = line.trim().split(parseInfoObject.nameValueSeperator);
    if (tempValue) {
      const valueName = tempValue[0].trim();
      let value = index;
      let description = '';
      if (tempValue[1].indexOf(parseInfoObject.commentString) > 0) {
        const valLine = tempValue[1].split(parseInfoObject.commentString);
        value = parseInt(valLine[0], 10);
        description = valLine[1].trim();
      } else {
        value = parseInt(tempValue[1], 10);
      }
      return {valueName, value, description};
    }
  }
  static javaEnumValueFromLine(line: string, index: number, parseInfoObject: SubSystemDefinition): EnumValue {
    const tempValue = line.trim().split(parseInfoObject.nameValueSeperator); // check if an enum can not contain brackets if so add "else"
    if (tempValue) {
      const valueName = tempValue[0].trim();
      let value = index;
      let description = '';
      if (tempValue[1].indexOf(parseInfoObject.commentString) > 0) {
        const valLine = tempValue[1].split(parseInfoObject.commentString);
        value = parseInt(valLine[0].substring(0, valLine[0].indexOf(')')).split(',')[3], 10);
        description = valLine[1].trim();
      } else {
        value = parseInt(tempValue[1].substring(0, tempValue[1].indexOf(')')).split(',')[3], 10);
        description = '';
      }
      return {valueName, value, description};
    }
  }
  public parseEnums(rowEnum: string, subSystem: string): EnumLocal {
    return this.parseEnumBlock(rowEnum, subsystemDefinitions[subSystem]);
  }

  /**
   * Get to this point after checking that rawEnum is not empty
   * @param rawEnum
   * @param parseInfoObject
   */
  private parseEnumBlock(rawEnum: string, parseInfoObject: SubSystemDefinition): EnumLocal {
    console.log(rawEnum);
    const name = ''; // TODO: extract name from the word before enum
    const description = ''; // TODO: extract description from the line above the enum decleration
    const values = rawEnum
      .trim()
      .substring(rawEnum.indexOf(parseInfoObject.blockStart) + 1, rawEnum.indexOf(parseInfoObject.blockEnd) - 1)
      .split('\n')
      .filter(val => {
        const line = val.trim();
        return line.length && line.indexOf(parseInfoObject.commentString) !== 0;
      })
      .map((val, index) => {
        return parseInfoObject.valueFromLine(val, index, parseInfoObject);
      }, []);
    return {values, name, description};
  }

  
  
  private parseJavaEnum(rawEnum: string) {
    console.log(rawEnum);
    const values = [];
    const name = '';
    const description = '';
    return {values, name, description};
  }
}

const subsystemDefinitions: SubSustemDefinitions = {
  mccx: {parseType: enumParseType.typeScript, blockStart: '{', blockEnd: '}', commentString: '//', nameValueSeperator: '=', valueFromLine: ParseUtilsService.typeScriptEnumValueFromLine },
  ugs:  {parseType: enumParseType.java, blockStart: '{', blockEnd: ';', commentString: '//', nameValueSeperator: '(', valueFromLine: ParseUtilsService.javaEnumValueFromLine},
  mops: {parseType: enumParseType.sql, blockStart: '{', blockEnd: '}', commentString: '//'},
}
