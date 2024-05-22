import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { FileResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class ProductImageService {
  apiName = 'Default';
  

  getBytes = (productId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FileResult>({
      method: 'GET',
      url: `/api/app/product-image/bytes/${productId}`,
    },
    { apiName: this.apiName,...config });
  

  save = (remoteStreams: IRemoteStreamContent[], productId: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, string[]>({
      method: 'POST',
      url: `/api/app/product-image/save/${productId}`,
      body: remoteStreams,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
