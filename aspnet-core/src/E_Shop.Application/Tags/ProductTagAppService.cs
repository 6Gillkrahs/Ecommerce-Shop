using E_Shop.Products;
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
    public class ProductTagAppService : CrudAppService<ProductTag, ProductTagDto, Guid, PagedAndSortedResultRequestDto, CreateUpdateProductTagDto>, IProductTagAppService
    {
        private readonly IRepository<Product, Guid > _productRepository;
        private readonly IRepository<Tag, Guid> _tagRepository;

        public ProductTagAppService(IRepository<ProductTag, Guid> repository , IRepository<Product, Guid> _productRepository, IRepository<Tag, Guid> _tagRepository) : base(repository)
        {
            this._productRepository = _productRepository;
            this._tagRepository = _tagRepository;
        }

        //public override Task<ProductTagDto> GetAsync(Guid id)
        //{
        //    var queryable = ;
        //    return base.GetAsync(id);
        //}

        public override async Task<PagedResultDto<ProductTagDto>> GetListAsync(PagedAndSortedResultRequestDto input)
        {
            var queryable = await Repository.GetQueryableAsync();
            var query = from productTag in queryable
                        join product in await _productRepository.GetQueryableAsync() on productTag.ProductId equals product.Id
                        join tag in await _tagRepository.GetQueryableAsync() on productTag.TagId equals tag.Id
                        select new { product, productTag, tag };
            var queryResult = await AsyncExecuter.ToListAsync(query);

            var Dtos = queryResult.Select(x =>
            {
                var Dto = ObjectMapper.Map<ProductTag, ProductTagDto>(x.productTag);
                Dto.ProductName = x.product.Code;
                Dto.TagName = x.tag.Label;
                return Dto;
            }).ToList();
            var totalCount = await Repository.GetCountAsync();
            return new PagedResultDto<ProductTagDto>(
            totalCount,
            Dtos
        );
           
        }

        public async Task<ListResultDto<TagDto>> GetProductTags(Guid productId)
        {
            var queryable = await Repository.GetQueryableAsync();
            var query = from productTag in queryable
                        join product in await _productRepository.GetQueryableAsync() on productTag.ProductId equals product.Id
                        join tag in await _tagRepository.GetQueryableAsync() on productTag.TagId equals tag.Id
                        where product.Id == productId
                        select new { product, productTag, tag };
                       
            var queryResult = await AsyncExecuter.ToListAsync(query);
            var Dtos = queryResult.Select(x =>
            {
                var Dto = ObjectMapper.Map<Tag, TagDto>(x.tag);

                return Dto;
            }).ToList();
            var totalCount = Dtos.Count;
            return new PagedResultDto<TagDto>(
            totalCount,
            Dtos
        );
        }
    }
}
