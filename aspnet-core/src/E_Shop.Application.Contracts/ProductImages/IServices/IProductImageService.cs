using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        Task<FileResult> GetBytesAsync(Guid productId);

    }
}
