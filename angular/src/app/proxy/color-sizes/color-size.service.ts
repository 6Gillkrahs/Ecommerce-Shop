import type { ColorSizeDto, CreateColorSizeDto, UpdateColorSizeDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorSizeService {
  apiName = 'Default';
  

  create = (input: CreateColorSizeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ColorSizeDto>({
      method: 'POST',
      url: '/api/app/color-size',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/color-size/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ColorSizeDto>({
      method: 'GET',
      url: `/api/app/color-size/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getColorSizesByProductIdByProductId = (productId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ColorSizeDto[]>({
      method: 'GET',
      url: `/api/app/color-size/color-sizes-by-product-id/${productId}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ColorSizeDto>>({
      method: 'GET',
      url: '/api/app/color-size',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: UpdateColorSizeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ColorSizeDto>({
      method: 'PUT',
      url: `/api/app/color-size/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
