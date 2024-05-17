import type { ExtensibleEntityDto, ExtensibleFullAuditedEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetIdentityUsersInput extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface IdentityRoleDto extends ExtensibleEntityDto<string> {
  name?: string;
  isDefault: boolean;
  isStatic: boolean;
  isPublic: boolean;
  concurrencyStamp?: string;
}

export interface IdentityUserCreateDto extends IdentityUserCreateOrUpdateDtoBase {
  password: string;
}

export interface IdentityUserCreateOrUpdateDtoBase extends ExtensibleObject {
  userName: string;
  name?: string;
  surname?: string;
  email: string;
  phoneNumber?: string;
  isActive: boolean;
  lockoutEnabled: boolean;
  roleNames: string[];
}

export interface IdentityUserDto extends ExtensibleFullAuditedEntityDto<string> {
  tenantId?: string;
  userName?: string;
  name?: string;
  surname?: string;
  email?: string;
  emailConfirmed: boolean;
  phoneNumber?: string;
  phoneNumberConfirmed: boolean;
  isActive: boolean;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  lockoutEnd?: string;
  concurrencyStamp?: string;
  entityVersion: number;
  lastPasswordChangeTime?: string;
}

export interface IdentityUserUpdateDto extends IdentityUserCreateOrUpdateDtoBase {
  password?: string;
  concurrencyStamp?: string;
}

export interface IdentityUserUpdateRolesDto {
  roleNames: string[];
}
