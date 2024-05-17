using E_Shop.Attributes.Dtos;
using E_Shop.Attributes.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace E_Shop.Attributes
{
    public class AttributeAppService : CrudAppService<Attributes.Attribute, AttributeDto, Guid, PagedAndSortedResultRequestDto, CreateAttributeDto, UpdateAttributeDto>, IAttributeAppService
    {

        private readonly IRepository<Attribute,Guid> _attributeRepository;
        public AttributeAppService(IRepository<Attribute, Guid> repository) : base(repository)
        {
            _attributeRepository = repository;
        }

        public override async Task<AttributeDto> CreateAsync(CreateAttributeDto input)
        {
            var attribute = new Attribute();
            string  code;
            StringBuilder label = new StringBuilder();
            bool capitalizeNext = true;
            foreach (char c in input.Label)
            {
                if(c == ' ')
                {
                    capitalizeNext = true;
                    label.Append(c);
                }
                else
                {
                    if (capitalizeNext)
                    {
                        label.Append(Char.ToUpper(c));
                        capitalizeNext = false;
                    }
                    else
                    {
                        label.Append(c);
                    }
                }
            }
            code = Char.ToUpper(input.Label[0]).ToString() + Char.ToUpper(input.Label[1]).ToString() + Char.ToUpper(input.Label[2]).ToString();
            attribute.Label = label.ToString();
            attribute.Type = input.Type;
            attribute.Code = code;
            attribute.SortOrder = input.SortOrder;
            attribute.Visibility = input.Visibility;
            attribute.isActive = input.isActive;
            attribute.isRequired = input.isRequired;
            attribute.isUnique = input.isUnique;
            attribute.Note = input.Note;
            await  _attributeRepository.InsertAsync(
                attribute
                );
            return ObjectMapper.Map<Attribute,AttributeDto>(attribute);
        }

        public override async Task<AttributeDto> UpdateAsync(Guid id, UpdateAttributeDto input)
        {
            Attribute attribute = await _attributeRepository.GetAsync(id);
            StringBuilder label = new StringBuilder();
            bool check = true;
            foreach(char c in input.Label)
            {
                if(c == ' ')
                {
                    check = true;
                    label.Append(c);
                }
                else
                {
                    if (check)
                    {
                        label.Append(Char.ToUpper(c));
                        check = false;
                    }
                    else
                    {
                        label.Append(c);
                    }
                }
            }
            attribute.Label = label.ToString();
            attribute.Code = Char.ToUpper(input.Label[0]).ToString() + Char.ToUpper(input.Label[1]).ToString() + Char.ToUpper(input.Label[2]).ToString();
            attribute.Type = input.Type;
            attribute.SortOrder = input.SortOrder;
            attribute.Visibility = input.Visibility;
            attribute.isActive = input.isActive;
            attribute.isRequired = input.isRequired;
            attribute.isUnique = input.isUnique;
            attribute.Note = input.Note;
            await _attributeRepository.UpdateAsync(attribute);  
            return ObjectMapper.Map<Attribute, AttributeDto>(attribute); ;
        }


    }
}
