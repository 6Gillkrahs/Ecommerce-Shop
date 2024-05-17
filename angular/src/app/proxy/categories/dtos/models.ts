import type { EntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CategoryDto extends EntityDto<string> {
  name?: string;
  code?: string;
  slug?: string;
  sortOrder: number;
  visibility: boolean;
  isActive: boolean;
  parentId?: string;
  seoMetaDecription?: string;
}

export interface CategoryGetListInput extends PagedAndSortedResultRequestDto {
}

export interface CreateCategoryDto {
  name?: string;
  sortOrder: number;
  visibility: boolean;
  isActive: boolean;
  parentId?: string;
  seoMetaDecription?: string;
}

export interface UpdateCategoryDto {
  name?: string;
  slug?: string;
  sortOrder: number;
  visibility: boolean;
  isActive: boolean;
  parentId?: string;
  seoMetaDecription?: string;
}
