import type { EntityDto } from '@abp/ng.core';
import type { Size } from '../../sizes/size.enum';

export interface ColorSizeDto extends EntityDto<string> {
  productName?: string;
  productId?: string;
  color?: string;
  size: Size;
  quantity: number;
  isActive: boolean;
}

export interface CreateColorSizeDto {
  productId?: string;
  color?: string;
  size: Size;
  quantity: number;
  isActive: boolean;
}

export interface UpdateColorSizeDto {
  color?: string;
  size: Size;
  quantity: number;
  isActive: boolean;
}
