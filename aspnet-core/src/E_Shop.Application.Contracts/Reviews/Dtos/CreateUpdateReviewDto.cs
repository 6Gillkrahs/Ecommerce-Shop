using System;
using System.Collections.Generic;
using System.Text;

namespace E_CommerceShop.Reviews.Dtos
{
    public class CreateUpdateReviewDto
    {
        public Guid ProductId { get; set; }
        public Guid ParentId { get; set; }
        public string Title { get; set; }
        public int Rating { get; set; }
       
        public DateTime PublishedAt { get; set; }
        public string Content { get; set; }
        public Guid UserId { get; set; }
        public Guid? SortId { get; set; }
    }
}
