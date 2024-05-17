﻿using E_Shop.Sizes;
using System;
using System.Collections.Generic;
using System.Text;

namespace E_Shop.ColorSizes.Dtos
{
    public class CreateColorSizeDto
    {
        public Guid ProductId { get; set; }
        public string Color { get; set; }
        public Size Size { get; set; }
        public int Quantity { get; set; }
        public bool isActive { get; set; } = true;
    }
}
