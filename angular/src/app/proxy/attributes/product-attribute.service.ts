import type { CreateProductAttribute, ProductAttributeDto, UpdateProductAttributeDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductAttributeService {
  apiName = 'Default';
  

  create = (input: CreateProductAttribute, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductAttributeDto>({
      method: 'POST',
      url: '/api/app/product-attribute',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/product-attribute/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductAttributeDto>({
      method: 'GET',
      url: `/api/app/product-attribute/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ProductAttributeDto>>({
      method: 'GET',
      url: '/api/app/product-attribute',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateProductAttributeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ProductAttributeDto>({
      method: 'PUT',
      url: `/api/app/product-attribute/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });
  

  getAllProductAttributebyProductIdByProductId = (productId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ProductAttributeDto>>({
      method: 'GET',
      url: `/api/app/product-attribute/get-all-product-attributeby-product-id/${productId}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
