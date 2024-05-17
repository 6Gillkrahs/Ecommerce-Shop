using E_Shop.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace E_Shop.Attributes
{
    public class ProductAttribute:AuditedAggregateRoot<Guid>
    {
        public Attribute Attribute { get; set; }
        public Guid AttributeId { get; set; }
        public Product Product { get; set; }
        public Guid ProductId { get; set; }
        public string Value { get; set; }
    }
}
