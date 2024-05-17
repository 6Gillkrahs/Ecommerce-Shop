using System;
using System.Collections.Generic;
using System.Text;

namespace E_Shop.Attributes.Dtos
{
    public class CreateProductAttribute
    {     
        public Guid AttributeId { get; set; }
        public Guid ProductId { get; set; }
        public string Value { get; set; }
    }
}
