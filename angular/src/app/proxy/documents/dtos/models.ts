import type { EntityDto } from '@abp/ng.core';

export interface DocumentDto extends EntityDto<string> {
  fileSize: number;
  fileUrl?: string;
  mimeType?: string;
}
