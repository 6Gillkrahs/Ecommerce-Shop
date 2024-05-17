import type { CreateManufacturerDto, ManufacturerDto, ManufacturerGetInput, UpdateManufacturerDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ManufacturerService {
  apiName = 'Default';
  

  create = (input: CreateManufacturerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ManufacturerDto>({
      method: 'POST',
      url: '/api/app/manufacturer',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/manufacturer/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ManufacturerDto>({
      method: 'GET',
      url: `/api/app/manufacturer/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: ManufacturerGetInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ManufacturerDto>>({
      method: 'GET',
      url: '/api/app/manufacturer',
      params: { name: input.name, country: input.country, code: input.code, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateManufacturerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ManufacturerDto>({
      method: 'PUT',
      url: `/api/app/manufacturer/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
