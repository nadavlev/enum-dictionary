export interface EnumValue {
  value: number;
  valueName: string;
  description?: string;
}

export interface EnumLocal {
  name: string;
  description?: string;
  values: EnumValue[];
}

export interface SystemExistence {
  [systemName: string]: EnumLocal;
}

export interface GlobalEnum {
  systemExistence: SystemExistence;
  description: string;
}

export interface GlobalEnumModel {
  [enumGeneralName: string]: GlobalEnum;
}

export enum enumParseType {
  typeScript,
  java,
  sql
}

export interface SubSustemDefinitions {
  [subSystemName: string]: SubSystemDefinition;
}

export interface SubSystemDefinition {
  parseType: enumParseType;
  commentString: string;
  blockStart: string;
  blockEnd: string;
  nameValueSeperator: string;
  valueFromLine: (line: string, index: number, parseInfoObject: SubSystemDefinition) => EnumValue;
}
