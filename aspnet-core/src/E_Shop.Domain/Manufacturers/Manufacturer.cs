using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace E_Shop.Manufacturers
{
    public class Manufacturer:AuditedAggregateRoot<Guid>
    {
        public string Name { get; set; }
        public string Code { get; set; }
        public string Slug { get; set; }
        public bool Visibility { get; set; }
        public bool isActive { get; set; }
        public string Country { get; set; }
    }
}
