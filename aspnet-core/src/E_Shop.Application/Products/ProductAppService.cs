﻿using E_Shop.Categories;
using E_Shop.Categories.Dtos;
using E_Shop.Images;
using E_Shop.Manufacturers;
using E_Shop.ProductImages.Dtos;
using E_Shop.Products.Dtos;
using E_Shop.Products.IServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.BlobStoring;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;

namespace E_Shop.Products
{
    public class ProductAppService : CrudAppService<Product, ProductDto, Guid, PagedAndSortedResultRequestDto, CreateUpdateProduct>, IProductAppService
    {
        private readonly IRepository<Product,Guid>  _productRepository;
        private readonly IRepository<Manufacturer,Guid> _manufacturerRepository;
        private readonly IRepository<Category,Guid> _categoryRepository;


        public ProductAppService(
            IRepository<Product, Guid> repository, 
            IRepository<Manufacturer, Guid> _manufacturerRepository, 
            IRepository<Category, Guid> _categoryRepository
            ) : base(repository)
        {
            _productRepository = repository;
            this._manufacturerRepository = _manufacturerRepository; 
            this._categoryRepository = _categoryRepository;
            
        }

        public override async Task<ProductDto> CreateAsync(CreateUpdateProduct input)
        {
            Manufacturer manufacturer = await _manufacturerRepository.GetAsync(input.ManufacturerId);
            Category category = await _categoryRepository.GetAsync(input.CategoryId);
            Product product = new Product();
            product.Manufacturer = manufacturer;
            product.ManufacturerId = input.ManufacturerId;
            product.ProductType = input.ProductType;
            product.SKU = input.SKU;
            product.Code = input.SKU;
            product.SortOrder = input.SortOrder;
            product.isActive = input.isActive;
            product.Category = category;
            product.Visibility = input.Visibility;
            product.CategoryId = input.CategoryId; 
            await _productRepository.InsertAsync(product); 
            return ObjectMapper.Map<Product,ProductDto>(product);
        }

        public async Task<PagedResultDto<ProductDto>> getAllByManufacturerId(Guid manufacturerId)
        {
            var listProduct = await _productRepository.GetListAsync(x =>  x.ManufacturerId == manufacturerId);
            return new PagedResultDto<ProductDto> 
            { 
                Items = ObjectMapper.Map<List<Product>,List<ProductDto>>(listProduct),
                TotalCount = listProduct.Count
            };
        }

        public override async Task<ProductDto> GetAsync(Guid id)
        {
            var queryable = await Repository.GetQueryableAsync();
            var query = from product in queryable
                        join category in await _categoryRepository.GetQueryableAsync() on product.CategoryId equals category.Id
                        join manufacturer in await _manufacturerRepository.GetQueryableAsync() on product.ManufacturerId equals manufacturer.Id
                        where product.Id == id
                        select new { product, category ,manufacturer};
            var queryResult = await AsyncExecuter.FirstOrDefaultAsync(query);
            if (queryResult == null)
            {
                throw new EntityNotFoundException(typeof(Product), id);
            }
            var productDto = ObjectMapper.Map<Product, ProductDto>(queryResult.product);
            productDto.CategoryName = queryResult.category.Name;
            productDto.ManufacturerName = queryResult.manufacturer.Name;
            return productDto;
        }

        public async Task<ListResultDto<CategoryLookupDto>> getCategoryLookupAsync()
        {
            var category = await _categoryRepository.GetListAsync();
            return new ListResultDto<CategoryLookupDto>
                (
                    ObjectMapper.Map<List<Category>, List<CategoryLookupDto>>(category)
                );
         
        }

        public override async Task<PagedResultDto<ProductDto>> GetListAsync(PagedAndSortedResultRequestDto input)
        {
            var queryable = await Repository.GetQueryableAsync();
            var query = from product in queryable
                        join category in await _categoryRepository.GetQueryableAsync() on product.CategoryId equals category.Id
                        join manufacturer in await _manufacturerRepository.GetQueryableAsync() on product.ManufacturerId equals manufacturer.Id
                        select new { product, category, manufacturer };
            var queryResult = await AsyncExecuter.ToListAsync(query);
            var productDtos = queryResult.Select(x =>
            {
                var productDto = ObjectMapper.Map<Product, ProductDto>(x.product);
                productDto.CategoryName = x.category.Name;
                productDto.ManufacturerName = x.manufacturer.Name;
                return productDto;
            }).ToList();
            var totalCount = await Repository.GetCountAsync();
            return new PagedResultDto<ProductDto>(
            totalCount,
            productDtos
        );
        }


       



    }
}