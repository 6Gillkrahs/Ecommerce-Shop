using E_Shop.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace E_Shop.Reviews
{
    public class Review : AuditedAggregateRoot<Guid>
    {
        public Product Products { get; set; }
        public Guid ProductId { get; set; }
        public Guid ParentId { get; set; }
        public string Title { get; set; }
        public int Rating { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime PublishedAt { get; set; }
        public string Content { get; set; }
        public Guid UserId { get; set; }
        public Guid? SortId { get; set; }
    }
}
