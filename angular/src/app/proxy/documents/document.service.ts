import type { DocumentDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IFormFile } from '../microsoft/asp-net-core/http/models';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  apiName = 'Default';
  

  uploadByFiles = (files: IFormFile[], config?: Partial<Rest.Config>) =>
    this.restService.request<any, DocumentDto[]>({
      method: 'POST',
      url: '/api/app/document/upload',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
