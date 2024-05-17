using E_Shop.Attributes.Dtos;
using E_Shop.Attributes.IServices;
using E_Shop.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;

namespace E_Shop.Attributes
{
    public class ProductAttributeAppService : CrudAppService<ProductAttribute, ProductAttributeDto, Guid, PagedAndSortedResultRequestDto, CreateProductAttribute,UpdateProductAttributeDto>, IProductAttributeAppService
    {
        private readonly IRepository<ProductAttribute,Guid> _productAttributeRepository;
        private readonly IRepository<Product,Guid> _productRepository;
        private readonly IRepository<Attribute, Guid> _attributeReppsitory;
        public ProductAttributeAppService(
            IRepository<ProductAttribute, Guid> repository,
            IRepository<Product, Guid> _productRepository,
            IRepository<Attribute, Guid> _attributeReppsitory
            ) : base(repository)
        {
            _productAttributeRepository = repository;
            this._productRepository = _productRepository;
            this._attributeReppsitory = _attributeReppsitory;
        }

        public override async Task<ProductAttributeDto> CreateAsync(CreateProductAttribute input)
        {
            ProductAttribute productAttribute = new ProductAttribute();
            Product product = await _productRepository.GetAsync(input.ProductId);
            Attribute attribute = await _attributeReppsitory.GetAsync(input.AttributeId);
            productAttribute.ProductId = input.ProductId;
            productAttribute.Product = product;
            productAttribute.AttributeId = attribute.Id;
            productAttribute.Attribute = attribute;
            productAttribute.Value = input.Value;
            await _productAttributeRepository.InsertAsync(productAttribute);
            return ObjectMapper.Map<ProductAttribute,ProductAttributeDto>(productAttribute);
        }
        public override async Task<PagedResultDto<ProductAttributeDto>> GetListAsync(PagedAndSortedResultRequestDto input)
        {
            var queryable = await Repository.GetQueryableAsync();
            var query = from productattribute in queryable
                        join attribute in await _attributeReppsitory.GetQueryableAsync() on productattribute.AttributeId equals attribute.Id
                        join product in await _productRepository.GetQueryableAsync() on productattribute.ProductId equals product.Id
                        select new { productattribute, attribute, product };
            var queryResult = await AsyncExecuter.ToListAsync(query);
            var Dtos = queryResult.Select(x =>
            {
                var Dto = ObjectMapper.Map<ProductAttribute, ProductAttributeDto>(x.productattribute);
                Dto.AttributeName = x.attribute.Label;
                Dto.ProductName = x.attribute.Code;
                return Dto;
            }).ToList();
            var totalCount = await Repository.GetCountAsync();
            return new PagedResultDto<ProductAttributeDto>(
            totalCount,
            Dtos
        );
        }

        public override async Task<ProductAttributeDto> GetAsync(Guid id)
        {
            ProductAttribute productAttribute = await _productAttributeRepository.GetAsync(id);
            var queryable = await Repository.GetQueryableAsync();
            var query = from productattribute in queryable
                        join attribute in await _attributeReppsitory.GetQueryableAsync() on productattribute.AttributeId equals attribute.Id
                        join product in await _productRepository.GetQueryableAsync() on productattribute.ProductId equals product.Id
                        where productattribute.Id == id
                        select new { productattribute, attribute, product };
            var queryResult = await AsyncExecuter.FirstOrDefaultAsync(query);
            if(queryResult == null)
            {
                throw new EntityNotFoundException(typeof(ProductAttribute), id);
            }
            var Dto = ObjectMapper.Map<ProductAttribute, ProductAttributeDto>(queryResult.productattribute);
            Dto.AttributeName = queryResult.attribute.Label;
            Dto.ProductName = queryResult.product.Code;
            return Dto;
        }

        public async Task<PagedResultDto<ProductAttributeDto>> getAllProductAttributebyProductId(Guid productId)
        {
            var queryable = await Repository.GetQueryableAsync();
            var query = from productattribute in queryable
                        join attribute in await _attributeReppsitory.GetQueryableAsync() on productattribute.AttributeId equals attribute.Id
                        join product in await _productRepository.GetQueryableAsync() on productattribute.ProductId equals product.Id
                        where productattribute.ProductId == productId
                        select new { productattribute, attribute, product };
            var queryResult = await AsyncExecuter.ToListAsync(query);
            var Dtos = queryResult.Select(x =>
            {
                var Dto = ObjectMapper.Map<ProductAttribute, ProductAttributeDto>(x.productattribute);
                Dto.AttributeName = x.attribute.Label;
                Dto.ProductName = x.attribute.Code;
                return Dto;
            }).ToList();
            var totalCount = Dtos.Count();
            return new PagedResultDto<ProductAttributeDto>(
            totalCount,
            Dtos
        );
        }
    }
}
