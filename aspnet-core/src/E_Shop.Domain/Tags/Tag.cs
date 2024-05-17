using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace E_Shop.Tags
{
    public class Tag : AuditedAggregateRoot<Guid>
    {
        public string Label { get; set; }
        public string Slug { get; set; }

    }
}
