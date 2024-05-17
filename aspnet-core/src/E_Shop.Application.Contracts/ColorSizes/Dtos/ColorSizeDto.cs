using E_Shop.Sizes;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace E_Shop.ColorSizes.Dtos
{
    public class ColorSizeDto:EntityDto<Guid>
    {
        public String ProductName { get; set; }
        public Guid ProductId { get; set; }
        public string Color { get; set; }
        public Size Size { get; set; }
        public int Quantity { get; set; }
        public bool isActive { get; set; }
    }
}
