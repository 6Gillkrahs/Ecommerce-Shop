import type { EntityDto } from '@abp/ng.core';

export interface CreateUpdateProductTagDto {
  productId?: string;
  tagId?: string;
}

export interface CreateUpdateTagDto {
  label?: string;
  slug?: string;
}

export interface ProductTagDto extends EntityDto<string> {
  productName?: string;
  productId?: string;
  tagId?: string;
  tagName?: string;
}

export interface TagDto extends EntityDto<string> {
  label?: string;
  slug?: string;
}
