using E_Shop.Products.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace E_Shop.Products.IServices
{
    public interface IProductAppService:ICrudAppService<ProductDto,Guid,PagedAndSortedResultRequestDto,CreateUpdateProduct>
    {
        Task<PagedResultDto<ProductDto>> getAllByManufacturerId(Guid manufacturerId);
        Task<ListResultDto<CategoryLookupDto>> getCategoryLookupAsync();
    }
}
