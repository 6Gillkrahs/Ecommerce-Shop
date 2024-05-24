using E_Shop.Tags.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace E_Shop.Tags.IServices
{
    public interface IProductTagAppService:ICrudAppService<ProductTagDto,Guid,PagedAndSortedResultRequestDto,CreateUpdateProductTagDto>
    {
       
        Task<ListResultDto<TagDto>> GetProductTags(Guid productId);
    }
}
