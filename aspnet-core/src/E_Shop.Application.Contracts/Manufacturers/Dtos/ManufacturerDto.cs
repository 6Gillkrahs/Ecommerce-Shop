using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace E_Shop.Manufacturers.Dtos
{
    public class ManufacturerDto : AuditedEntityDto<Guid>
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Slug { get; set; }
        public bool Visibility { get; set; }
        public bool isActive { get; set; }
        public string Country { get; set; }
    }
}
