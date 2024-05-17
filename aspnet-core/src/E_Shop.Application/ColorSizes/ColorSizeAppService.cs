using E_Shop.ColorSizes.Dtos;
using E_Shop.ColorSizes.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace E_Shop.ColorSizes
{
    public class ColorSizeAppService : CrudAppService<ColorSize, ColorSizeDto, Guid, PagedAndSortedResultRequestDto, CreateColorSizeDto, UpdateColorSizeDto>, IColorSizeAppService
    {
        public ColorSizeAppService(IRepository<ColorSize, Guid> repository) : base(repository)
        {
        }
    }
}
