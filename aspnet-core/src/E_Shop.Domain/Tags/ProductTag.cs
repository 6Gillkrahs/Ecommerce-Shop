using E_Shop.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_Shop.Tags
{
    public class ProductTag
    {
        public Product Products { get; set; }
        public Guid ProductId { get; set; }
        public Tag Tags { get; set; }
        public Guid TagId { get; set; }
    }
}
