using System;
using System.Collections.Generic;
using System.Text;

namespace E_Shop.Categories.Dtos
{
    public class UpdateCategoryDto
    {
        public string Name { get; set; }
        public string Slug { get; set; }
        public int SortOrder { get; set; }
        public bool Visibility { get; set; }
        public bool isActive { get; set; }
        public Guid? ParentId { get; set; }
        public string SEOMetaDecription { get; set; }
    }
}
