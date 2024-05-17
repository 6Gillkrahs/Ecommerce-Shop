using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace E_CommerceShop.Reviews.Dtos
{
    public class ReviewDto :EntityDto<Guid>
    {
        public string ProductName { get; set; }
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
