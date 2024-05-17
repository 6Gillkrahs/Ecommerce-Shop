using E_CommerceShop.Reviews.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace E_CommerceShop.Reviews.IServices
{
    public interface IReviewAppService:ICrudAppService<ReviewDto,Guid,PagedAndSortedResultRequestDto,CreateUpdateReviewDto>
    {
    }
}
