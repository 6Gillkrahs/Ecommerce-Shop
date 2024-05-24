import type { CreateUpdateProductTagDto, ProductTagDto, TagDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { ListResultDto, PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductTagService {
  apiName = 'Default';
  

  create = (input: CreateUpdateProductTagDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductTagDto>({
      method: 'POST',
      url: '/api/app/product-tag',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/product-tag/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductTagDto>({
      method: 'GET',
      url: `/api/app/product-tag/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ProductTagDto>>({
      method: 'GET',
      url: '/api/app/product-tag',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getProductTagsByProductId = (productId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ListResultDto<TagDto>>({
      method: 'GET',
      url: `/api/app/product-tag/product-tags/${productId}`,
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateProductTagDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductTagDto>({
      method: 'PUT',
      url: `/api/app/product-tag/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
