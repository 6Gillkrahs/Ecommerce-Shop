import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IFormFile } from '../microsoft/asp-net-core/http/models';

@Injectable({
  providedIn: 'root',
})
export class ProductImageService {
  apiName = 'Default';
  

  getBytes = (name: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'GET',
      url: '/api/app/product-image/bytes',
      params: { name },
    },
    { apiName: this.apiName,...config });
  

  saveBytes = (files: IFormFile[], productId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/product-image/save-bytes/${productId}`,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
