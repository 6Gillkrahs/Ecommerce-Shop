using E_Shop.Attributes.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace E_Shop.Attributes.IServices
{
    public interface IAttributeAppService:ICrudAppService<AttributeDto,Guid,PagedAndSortedResultRequestDto,CreateAttributeDto,UpdateAttributeDto>
    {
        Task<AttributeDto> CreateAsync(CreateAttributeDto input);
    }

    
}
