using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace E_Shop.Attributes.Dtos
{
    public class ProductAttributeDto:EntityDto<Guid>
    {
        public string AttributeName { get; set; }
        public Guid AttributeId { get; set; }
        public string ProductName { get; set; }
        public Guid ProductId { get; set; }
        public string Value { get; set; }
    }
}
