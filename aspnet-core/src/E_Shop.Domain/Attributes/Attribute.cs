
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace E_Shop.Attributes
{
    public class Attribute : AuditedAggregateRoot<Guid>
    {
        public string Code { get; set; }
        public AttributeType Type { get; set; }
        public string Label { get; set; }
        public int SortOrder { get; set; }
        public bool Visibility { get; set; }
        public bool isActive { get; set; }
        public bool isRequired { get; set; }
        public bool isUnique { get; set; }
        public string Note { get; set; }
        public ICollection<ProductAttribute> productAttributes { get; set; }
       
    }
}
