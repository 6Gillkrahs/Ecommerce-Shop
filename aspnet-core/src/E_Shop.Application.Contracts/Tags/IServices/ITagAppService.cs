using E_Shop.Tags.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace E_Shop.Tags.IServices
{
    public interface ITagAppService:ICrudAppService<TagDto, Guid,PagedAndSortedResultRequestDto,CreateUpdateTagDto>
    {
    }
}
