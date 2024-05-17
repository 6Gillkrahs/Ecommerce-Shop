using System;
using System.Collections.Generic;
using System.Text;

namespace E_Shop.Manufacturers.Dtos
{
    public class UpdateManufacturerDto
    {
        public string Name { get; set; }
        public string Slug { get; set; }
        public bool Visibility { get; set; }
        public bool isActive { get; set; }
        public string Country { get; set; }
    }
}
