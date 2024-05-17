import { mapEnumToOptions } from '@abp/ng.core';

export enum AttributeType {
  Text = 0,
  Int = 1,
  Double = 2,
  DateTime = 3,
}

export const attributeTypeOptions = mapEnumToOptions(AttributeType);
