import type { EntityDto } from '@abp/ng.core';
import type { AttributeType } from '../attribute-type.enum';

export interface AttributeDto extends EntityDto<string> {
  code?: string;
  type: AttributeType;
  label?: string;
  sortOrder: number;
  visibility: boolean;
  isActive: boolean;
  isRequired: boolean;
  isUnique: boolean;
  note?: string;
}

export interface CreateAttributeDto {
  type: AttributeType;
  label?: string;
  sortOrder: number;
  visibility: boolean;
  isActive: boolean;
  isRequired: boolean;
  isUnique: boolean;
  note?: string;
}

export interface CreateProductAttribute {
  attributeId?: string;
  productId?: string;
  value?: string;
}

export interface ProductAttributeDto extends EntityDto<string> {
  attributeName?: string;
  attributeId?: string;
  productName?: string;
  productId?: string;
  value?: string;
}

export interface UpdateAttributeDto {
  type: AttributeType;
  label?: string;
  sortOrder: number;
  visibility: boolean;
  isActive: boolean;
  isRequired: boolean;
  isUnique: boolean;
  note?: string;
}

export interface UpdateProductAttributeDto {
  value?: string;
}
