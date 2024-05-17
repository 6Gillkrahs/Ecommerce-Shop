import type { EntityDto, FullAuditedEntityDto } from '@abp/ng.core';

export interface CategoryLookupDto extends EntityDto<string> {
  categoryName?: string;
}

export interface CreateUpdateProduct {
  manufacturerId?: string;
  productType?: string;
  sku?: string;
  sortOrder: number;
  visibility: boolean;
  isActive: boolean;
  categoryId?: string;
}

export interface ProductDto extends FullAuditedEntityDto<string> {
  manufacturerName?: string;
  manufacturerId?: string;
  code?: string;
  productType?: string;
  sku?: string;
  sortOrder: number;
  visibility: boolean;
  isActive: boolean;
  categoryName?: string;
  categoryId?: string;
}
