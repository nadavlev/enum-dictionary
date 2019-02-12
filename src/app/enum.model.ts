export interface IEnumValue {
  value: number;
  valueName: string;
  description?: string;
}

export interface IEnumLocal {
  name: string;
  description?: string;
  values: IEnumValue[];
}

export interface ISystemExistence {
  [systemName: string]: IEnumLocal;
}

export interface IGlobalEnum {
  systemExistence: ISystemExistence;
  description: string;
}

export interface IGlobalEnumModel {
  [enumGeneralName: string]: IGlobalEnum;
}

export enum enumParseType {
  typeScript,
  java,
  sql
}

export interface ISubSustemDefinitions {
  [subSystemName: string]: ISubSystemDefinition;
}

export interface ISubSystemDefinition {
  parseType: enumParseType;
  commentString: string;
  blockStart: string;
  blockEnd: string;
  nameValueSeperator: string;
  valueFromLine?: (line: string, index: number, parseInfoObject: ISubSystemDefinition) => IEnumValue;
}
