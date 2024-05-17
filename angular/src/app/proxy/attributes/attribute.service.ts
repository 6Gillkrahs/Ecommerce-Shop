import type { AttributeDto, CreateAttributeDto, UpdateAttributeDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttributeService {
  apiName = 'Default';
  

  create = (input: CreateAttributeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AttributeDto>({
      method: 'POST',
      url: '/api/app/attribute',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/attribute/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AttributeDto>({
      method: 'GET',
      url: `/api/app/attribute/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AttributeDto>>({
      method: 'GET',
      url: '/api/app/attribute',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateAttributeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AttributeDto>({
      method: 'PUT',
      url: `/api/app/attribute/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
