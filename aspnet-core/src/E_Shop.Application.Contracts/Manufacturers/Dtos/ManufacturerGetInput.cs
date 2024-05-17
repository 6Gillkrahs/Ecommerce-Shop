using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace E_Shop.Manufacturers.Dtos
{
    public class ManufacturerGetInput : PagedAndSortedResultRequestDto
    {
        public string? Name { get; set; }
        public string? Country { get; set; }
        public string? Code { get; set; }
    }
}
