using E_Shop.Manufacturers.Dtos;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Services;

namespace E_Shop.Manufacturers.IServices
{
    public interface IManufacturerAppService : ICrudAppService<
        ManufacturerDto, 
        Guid, 
        ManufacturerGetInput, 
        CreateManufacturerDto,
        UpdateManufacturerDto>
    {
    }
}
