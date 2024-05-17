using E_Shop.Categories.Dtos;
using E_Shop.Categories.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace E_Shop.Categories
{
    public class CategoryAppService : CrudAppService<Category, CategoryDto, Guid, CategoryGetListInput, CreateCategoryDto, UpdateCategoryDto>, ICategoryAppService
    {
        private readonly IRepository<Category,Guid> _categoryRepository;
        public CategoryAppService(IRepository<Category, Guid> repository) : base(repository)
        {
            _categoryRepository = repository;
        }

        //public async Task<PagedResultDto<CategoryDto>> getListByNameAsync(CategoryGetListInput input, string nameCategory)
        //{
        //    var allcategory = await _categoryRepository.GetListAsync();
        //}


        //public List<CategoryDto> FindChildMenus(List<Category> allCategories, Guid parentId)
        //{
        //    List<CategoryDto> childMenus = new List<CategoryDto>();

        //    foreach (var category in allCategories)
        //    {
        //        if (category.ParentId == parentId)
        //        {
        //            CategoryDto categoryDto = new CategoryDto();
        //            categoryDto.Name = category.Name;
        //            categoryDto.ParentId = parentId;
        //            categoryDto.Id = category.Id;
        //            childMenus.Add(categoryDto);
        //            // Tìm các con cháu của menu hiện tại
        //            var grandChildMenus = FindChildMenus(allCategories, category.Id);
        //            childMenus.AddRange(grandChildMenus);
        //        }
        //    }
        //    Console.WriteLine($"{childMenus}");
        //    return childMenus;
        //}

        //public override async Task DeleteAsync(Guid id)
        //{
        //    List<Category> allCategories = await _categoryRepository.GetListAsync();
        //    var childMenus = new List<CategoryDto>();
        //    childMenus = FindChildMenus(allCategories, id);
        //    foreach (var category in childMenus)
        //    {
        //        Console.WriteLine($"{category}");
        //        await _categoryRepository.DeleteAsync(category.Id);
        //    }
        //    await _categoryRepository.DeleteAsync(id);
        //    return;
        //}

        public override async Task<CategoryDto> CreateAsync(CreateCategoryDto input)
        {
            Category category = new Category();
            StringBuilder name = new StringBuilder();
            bool capitalizeNext = true;
            StringBuilder slug = new StringBuilder();
            foreach (char c in input.Name)
            {
                if (c == ' ')
                {
                    capitalizeNext = true;
                    name.Append(c);
                }
                else if (capitalizeNext)
                {
                    name.Append(char.ToUpper(c));
                    capitalizeNext = false;
                }
                else
                {
                    name.Append(char.ToLower(c));
                }
            }
            foreach(char c in input.Name)
            {
                if(c != ' ') 
                {
                    slug.Append(Char.ToLower(c));
                }
            }
            category.Name = name.ToString();
            category.Code = Char.ToUpper(input.Name[0]).ToString() + Char.ToUpper(input.Name[1]).ToString() + Char.ToUpper(input.Name[2]).ToString();
            category.Slug = slug.ToString();
            category.SortOrder = input.SortOrder;
            category.Visibility = input.Visibility;
            category.isActive = input.isActive;
            category.ParentId = input.ParentId;
            category.SEOMetaDecription = input.SEOMetaDecription;
            await _categoryRepository.InsertAsync(category);            
            return ObjectMapper.Map<Category,CategoryDto>(category);
        }

        public override async Task<CategoryDto> UpdateAsync(Guid id, UpdateCategoryDto input)
        {
            Category category = await _categoryRepository.GetAsync(id);
            StringBuilder name = new StringBuilder();
            bool capitalizeNext = true;
            StringBuilder slug = new StringBuilder();
            foreach (char c in input.Name)
            {
                if (c == ' ')
                {
                    capitalizeNext = true;
                    name.Append(c);
                }
                else if (capitalizeNext)
                {
                    name.Append(char.ToUpper(c));
                    capitalizeNext = false;
                }
                else
                {
                    name.Append(char.ToLower(c));
                }
            }
            foreach (char c in input.Slug)
            {
                if (c != ' ')
                {
                    slug.Append(Char.ToLower(c));
                }
            }
            category.Name = name.ToString();
            category.Code = Char.ToUpper(input.Name[0]).ToString() + Char.ToUpper(input.Name[1]).ToString() + Char.ToUpper(input.Name[2]).ToString();
            category.Slug = slug.ToString();
            category.SortOrder = input.SortOrder;
            category.Visibility = input.Visibility;
            category.isActive = input.isActive;
            category.ParentId = input.ParentId;
            category.SEOMetaDecription = input.SEOMetaDecription;
            await _categoryRepository.UpdateAsync(category);
            return ObjectMapper.Map<Category, CategoryDto>(category);
        }

    }
}
