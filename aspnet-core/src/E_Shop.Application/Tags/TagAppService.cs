using E_Shop.Tags.Dtos;
using E_Shop.Tags.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace E_Shop.Tags
{
    public class TagAppService:CrudAppService<Tag, TagDto, Guid, PagedAndSortedResultRequestDto, CreateUpdateTagDto>, ITagAppService
    {
        public TagAppService(IRepository<Tag, Guid> repository) : base(repository)
        {
        }
    }
    
}
