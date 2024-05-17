using E_Shop.Categories.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace E_Shop.Categories.IServices
{
    public interface ICategoryAppService : ICrudAppService<CategoryDto, Guid, CategoryGetListInput, CreateCategoryDto,UpdateCategoryDto>
    {
       

        
    }
}
