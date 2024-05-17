using E_Shop.Manufacturers.Dtos;
using E_Shop.Manufacturers.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace E_Shop.Manufacturers
{
    public class ManufacturerAppService : CrudAppService<
        Manufacturer, 
        ManufacturerDto, 
        Guid, 
        ManufacturerGetInput, 
        CreateManufacturerDto, 
        UpdateManufacturerDto>, 
        IManufacturerAppService
    {
        private readonly IRepository<Manufacturer,Guid> _manufacturerRepository;

        public ManufacturerAppService(IRepository<Manufacturer, Guid> repository) : base(repository)
        {
            _manufacturerRepository = repository;
        }

        public override async Task<ManufacturerDto> CreateAsync(CreateManufacturerDto input)
        {
            Manufacturer manufacturer = new Manufacturer();
            StringBuilder name = new StringBuilder();
            StringBuilder country = new StringBuilder();
            StringBuilder slug = new StringBuilder();
            bool capitalizeNext = true;
            foreach (char c in input.Name)
            {
                if(c == ' ') 
                {
                    name.Append(c);
                    capitalizeNext = true;                 
                }
                else
                {
                    if (capitalizeNext)
                    {
                        name.Append(Char.ToUpper(c));
                        capitalizeNext = false;
                    }
                    else {
                        name.Append(c);
                    }
                }
            }
            capitalizeNext = true;
            foreach (char c in input.Country)
            {
                if (c == ' ')
                {
                    capitalizeNext = true;
                }
                else
                {
                    if (capitalizeNext)
                    {
                        country.Append(Char.ToUpper(c));
                        capitalizeNext = false;
                    }
                    else
                    {
                        country.Append(c);
                    }
                }
            }
            foreach(char c in input.Name)
            {
                if(c != ' ')
                {
                    slug.Append(Char.ToLower(c));
                }
            }
            manufacturer.Code = Char.ToUpper(input.Name[0]).ToString() + Char.ToUpper(input.Name[1]).ToString() + Char.ToUpper(input.Name[2]).ToString() ;
            manufacturer.Name = name.ToString();
            manufacturer.Country = country.ToString();
            manufacturer.Slug = slug.ToString();
            manufacturer.Visibility = input.Visibility;
            manufacturer.isActive = input.isActive;
            await _manufacturerRepository.InsertAsync(manufacturer);
            return ObjectMapper.Map<Manufacturer,ManufacturerDto>(manufacturer);

        }

        public override async Task<ManufacturerDto> UpdateAsync(Guid id, UpdateManufacturerDto input)
        {
            Manufacturer manufacturer = await _manufacturerRepository.GetAsync(id);
            StringBuilder name = new StringBuilder();
            StringBuilder country = new StringBuilder();
            StringBuilder slug = new StringBuilder();
            bool capitalizeNext = true;
            foreach (char c in input.Name)
            {
                if (c == ' ')
                {
                    name.Append(c);
                    capitalizeNext = true;
                }
                else
                {
                    if (capitalizeNext)
                    {
                        name.Append(Char.ToUpper(c));
                        capitalizeNext = false;
                    }
                    else
                    {
                        name.Append(c);
                    }
                }
            }
            capitalizeNext = true;
            foreach (char c in input.Country)
            {
                if (c == ' ')
                {
                    capitalizeNext = true;
                }
                else
                {
                    if (capitalizeNext)
                    {
                        country.Append(Char.ToUpper(c));
                        capitalizeNext = false;
                    }
                    else
                    {
                        country.Append(c);
                    }
                }
            }
            foreach (char c in input.Name)
            {
                if (c != ' ')
                {
                    slug.Append(Char.ToLower(c));
                }
            }
            manufacturer.Code = Char.ToUpper(input.Name[0]).ToString() + Char.ToUpper(input.Name[1]).ToString() + Char.ToUpper(input.Name[2]).ToString();
            manufacturer.Name = name.ToString();
            manufacturer.Country = country.ToString();
            manufacturer.Slug = slug.ToString();
            manufacturer.Visibility = input.Visibility;
            manufacturer.isActive = input.isActive;
            return ObjectMapper.Map<Manufacturer, ManufacturerDto>(manufacturer);
           
        }

    }
}
