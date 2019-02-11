import { Injectable } from '@angular/core';
import { EnumLocal, enumParseType, EnumValue, SubSustemDefinitions, SubSystemDefinition } from './enum.model';

@Injectable({
  providedIn: 'root'
})
export class ParseUtilsService {

  constructor() {}

  static typeScriptEnumValueFromLine(line: string, index: number, parseInfoObject: SubSystemDefinition): EnumValue {
    const tempValue = line.trim().split('=');
    if (tempValue) {
      const valueName = tempValue[0].trim();
      let value = index;
      let description = '';
      if (tempValue[1].indexOf(parseInfoObject.commentString) > 0) {
        const valLine = tempValue[1].split('//');
        value = parseInt(valLine[0], 10);
        description = valLine[1].trim();
      } else {
        value = parseInt(tempValue[1], 10);
      }
      return {valueName, value, description};
    }
  }
  public parseEnums(rowEnum: string, subSystem: string): EnumLocal {
    switch (subSystem) {
      case 'mccx':
        return this.parseTypeScriptEnum(rowEnum, subsystemDefinitions[subSystem]);
      case 'ugs':
        return this.parseJavaEnum(rowEnum);
    }
  }
  
  /**
   * Get to this point after checking that rowEnum is not empty
   * @param rowEnum
   * @param parseInfoObject
   */
  private parseTypeScriptEnum(rowEnum: string, parseInfoObject: SubSystemDefinition): EnumLocal {
    console.log(rowEnum);
    const name = '';
    const description = '';
    const values = rowEnum
      .trim()
      .substring(rowEnum.indexOf(parseInfoObject.blockStart) + 1, rowEnum.indexOf(parseInfoObject.blockEnd) - 1)
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
  
  private parseJavaEnum(rowEnum: string) {
    console.log(rowEnum);
    const values = [];
    const name = '';
    const description = '';
    return {values, name, description};
  }
  
}
// const e = this.inputEnum.substring(this.inputEnum.indexOf('{') + 1, this.inputEnum.indexOf('}'));
//
// this.enumDetails.systemExistence[this.activeSubSystem].values = e.split('\n')
//   // eliminate empty lines and comment lines
//   .filter(val => {
//     const line = val.trim();
//     return line.length && line.indexOf('//') !== 0;
//   })
//   .map((val, index) => {
//   const tempVal = val.split('=');
//   if (tempVal) {
//     let value = index;
//     let description = '';
//     if (tempVal[1].indexOf('//') > 0) {
//       const valLine = tempVal[1].split('//');
//       value = parseInt(valLine[0], 10);
//       description = valLine[1].trim();
//     } else {
//       value = parseInt(tempVal[1], 10);
//     }
//     const valueName = tempVal[0].trim();
//     return {valueName, value, description};
//   }
// });
const subsystemDefinitions: SubSustemDefinitions = {
  mccx: {parseType: enumParseType.typeScript, blockStart: '{', blockEnd: '}', commentString: '//', valueFromLine: ParseUtilsService.typeScriptEnumValueFromLine },
  ugs:  {parseType: enumParseType.java, blockStart: '{', blockEnd: '}', commentString: '//'},
  mops: {parseType: enumParseType.sql, blockStart: '{', blockEnd: '}', commentString: '//'},
}
