using E_Shop.ColorSizes.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace E_Shop.ColorSizes.IServices
{
    public interface IColorSizeAppService:ICrudAppService<ColorSizeDto,Guid,PagedAndSortedResultRequestDto,CreateColorSizeDto,UpdateColorSizeDto>
    {
    }
}
