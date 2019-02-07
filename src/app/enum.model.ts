export class EnumValue {
  value: number;
  valueName: string;
  description?: string;
}

export class EnumLocal {
  name: string;
  description?: string;
  values: EnumValue[];
}

export class SystemExistence {
  [systemName: string]: EnumLocal;
}

export class GlobalEnum {
  systemExistence: SystemExistence;
  description: string;
}

export class GlobalEnumModel {
  [enumGeneralName: string]: GlobalEnum;
}
