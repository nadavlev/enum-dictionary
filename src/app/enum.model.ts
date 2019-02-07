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
