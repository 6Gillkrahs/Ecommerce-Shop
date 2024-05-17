using System;
using System.Collections.Generic;
using System.Text;

namespace E_Shop.Categories.Dtos
{
    public class CreateCategoryDto
    {
        public string Name { get; set; }
        public int SortOrder { get; set; }
        public bool Visibility { get; set; }
        public bool isActive { get; set; }
        public Guid? ParentId { get; set; } = null;
        public string SEOMetaDecription { get; set; }
    }
}
