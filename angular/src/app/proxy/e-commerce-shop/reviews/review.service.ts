import type { CreateUpdateReviewDto, ReviewDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  apiName = 'Default';
  

  create = (input: CreateUpdateReviewDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ReviewDto>({
      method: 'POST',
      url: '/api/app/review',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/review/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ReviewDto>({
      method: 'GET',
      url: `/api/app/review/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<ReviewDto>>({
      method: 'GET',
      url: '/api/app/review',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateReviewDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, ReviewDto>({
      method: 'PUT',
      url: `/api/app/review/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
