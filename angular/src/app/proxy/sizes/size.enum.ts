import { mapEnumToOptions } from '@abp/ng.core';

export enum Size {
  S = 0,
  M = 1,
  L = 2,
  XL = 3,
  XXL = 4,
}

export const sizeOptions = mapEnumToOptions(Size);
