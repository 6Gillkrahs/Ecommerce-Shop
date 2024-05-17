using E_Shop.Attributes;
using E_Shop.Categories;
using E_Shop.ColorSizes;
using E_Shop.Images;
using E_Shop.Manufacturers;
using E_Shop.Reviews;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace E_Shop.Products
{
    public class Product : FullAuditedAggregateRoot<Guid>
    {
        public Manufacturer Manufacturer { get; set; }
        public Guid ManufacturerId { get; set; }
        public string Code { get; set; }
        public string? ProductType { get; set; }
        public string SKU { get; set; }
        public int SortOrder { get; set; }
        public bool Visibility { get; set; }
        public bool isActive { get; set; }
        public Category Category { get; set; }
        public Guid CategoryId { get; set; }
        public ICollection<Review> Reviews { get; set; }
        public ICollection<ProductAttribute> productAttributes { get; set; }
        public ICollection<ProductImage> productImages { get; set; }
        public ICollection<ColorSize> ColorSizes { get; set; }


    }
}
