import type { AuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateManufacturerDto {
  name?: string;
  visibility: boolean;
  isActive: boolean;
  country?: string;
}

export interface ManufacturerDto extends AuditedEntityDto<string> {
  name?: string;
  code?: string;
  slug?: string;
  visibility: boolean;
  isActive: boolean;
  country?: string;
}

export interface ManufacturerGetInput extends PagedAndSortedResultRequestDto {
  name?: string;
  country?: string;
  code?: string;
}

export interface UpdateManufacturerDto {
  name?: string;
  slug?: string;
  visibility: boolean;
  isActive: boolean;
  country?: string;
}
