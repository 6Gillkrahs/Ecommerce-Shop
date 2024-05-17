using E_Shop.Products;
using E_Shop.Sizes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace E_Shop.ColorSizes
{
    public class ColorSize:Entity<Guid>
    {
        public Product Product { get; set; }
        public Guid ProductId { get; set; }
        public string Color { get; set; }
        public Size Size { get; set; }
        public int Quantity { get; set; }
        public bool isActive { get; set; }
    }
}
