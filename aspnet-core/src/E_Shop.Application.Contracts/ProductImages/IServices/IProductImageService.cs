using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace E_Shop.ProductImages.IServices
{
    public interface IProductImageService :IApplicationService
    {
        Task SaveBytesAsync(List<IFormFile> files, Guid productId);
    }
}
