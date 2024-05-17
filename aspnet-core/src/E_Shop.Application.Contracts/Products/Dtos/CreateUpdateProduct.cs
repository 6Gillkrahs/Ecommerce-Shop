using System;
using System.Collections.Generic;
using System.Text;

namespace E_Shop.Products.Dtos
{
    public class CreateUpdateProduct
    {
        public Guid ManufacturerId { get; set; }
        public string? ProductType { get; set; }
        public string SKU { get; set; }
        public int SortOrder { get; set; }
        public bool Visibility { get; set; }
        public bool isActive { get; set; }
        public Guid CategoryId { get; set; }
    }
}
