using E_Shop.Images;
using E_Shop.ProductImages.Dtos;
using E_Shop.ProductImages.IServices;
using E_Shop.Products;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Application.Services;
using Volo.Abp.BlobStoring;
using Volo.Abp.Content;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Users;

namespace E_Shop.ProductImages
{
    public class ProductImageAppService:ApplicationService, IProductImageService
    {
        private readonly IRepository<ProductImage, Guid> _productimageRepositoty;
        private readonly IBlobContainer<ProductImageContainer> _blobContainer; 

        public ProductImageAppService(
            IRepository<ProductImage, Guid> productimageRepositoty,
            IBlobContainer<ProductImageContainer> blobContainer
            )
        {
            _productimageRepositoty = productimageRepositoty;
            _blobContainer = blobContainer;
        }

        public async Task<FileResult> GetBytesAsync(Guid productId)
        {
            var productImage1 = await _productimageRepositoty.GetListAsync(x => x.ProductId == productId);
            List<FileContentResult> fileContentResults = new List<FileContentResult>();
            if (productImage1 != null)
            {
                foreach (var item in productImage1)
                {
                    var myFile = await _blobContainer.GetAllBytesOrNullAsync(item.Name);
                    fileContentResults.Add(new FileContentResult(myFile, item.MineType));
                }
            }
            return fileContentResults.FirstOrDefault() ?? throw new FileNotFoundException();
        }
        public async Task<IEnumerable<string>> SaveAsync(IEnumerable<IRemoteStreamContent> remoteStreams, Guid productId)
        {
            var fileNames = new List<string>();

            try
            {
                foreach (var remoteStream in remoteStreams)
                {
                    var stream = remoteStream.GetStream();
                    var id = Guid.NewGuid();
                    var newFile = new ProductImage(id, remoteStream.FileName, productId, "admin", remoteStream.ContentType, remoteStream.ContentLength);
                    var created = await _productimageRepositoty.InsertAsync(newFile);
                    ObjectMapper.Map<ProductImage, ProductImageDto>(newFile);
                    await _blobContainer.SaveAsync(remoteStream.FileName, stream);
                    fileNames.Add(remoteStream.FileName);
                }

                return fileNames;
            }
            catch (Exception ex)
            {
                throw new UserFriendlyException(ex.Message);
            }
        }


    }
}
