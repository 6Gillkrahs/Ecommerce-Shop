using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace E_Shop.Products.Dtos
{
    public class ProductDto:FullAuditedEntityDto<Guid>
    {
        public string ManufacturerName { get; set; }
        public Guid ManufacturerId { get; set; }
        public string Code { get; set; }
        public string? ProductType { get; set; }
        public string SKU { get; set; }
        public int SortOrder { get; set; }
        public bool Visibility { get; set; }
        public bool isActive { get; set; }
        public string CategoryName { get; set; }
        public Guid CategoryId { get; set; }
    }
}
