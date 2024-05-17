using E_Shop.Attributes.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace E_Shop.Attributes.IServices
{
    public interface IProductAttributeAppService:ICrudAppService<ProductAttributeDto,Guid,PagedAndSortedResultRequestDto, CreateProductAttribute,UpdateProductAttributeDto>
    {
        Task<PagedResultDto<ProductAttributeDto>> getAllProductAttributebyProductId(Guid productId);
    }
}
