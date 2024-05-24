using System;
using System.Collections.Generic;
using System.Text;

namespace E_Shop.Products.Dtos
{
    public class TagLookUpDto
    {
        public Guid Id { get; set; }
        public string Label { get; set; }
        public string Slug { get; set; }
    }
}
