import type { EntityDto } from '@abp/ng.core';

export interface CreateUpdateReviewDto {
  productId?: string;
  parentId?: string;
  title?: string;
  rating: number;
  publishedAt?: string;
  content?: string;
  userId?: string;
  sortId?: string;
}

export interface ReviewDto extends EntityDto<string> {
  productName?: string;
  productId?: string;
  parentId?: string;
  title?: string;
  rating: number;
  createdAt?: string;
  publishedAt?: string;
  content?: string;
  userId?: string;
  sortId?: string;
}
