using System;
using System.Collections.Generic;
using System.Text;

namespace E_Shop.Attributes.Dtos
{
    public class UpdateAttributeDto
    {
        public AttributeType Type { get; set; }
        public string Label { get; set; }
        public int SortOrder { get; set; }
        public bool Visibility { get; set; }
        public bool isActive { get; set; }
        public bool isRequired { get; set; }
        public bool isUnique { get; set; }
        public string Note { get; set; }
    }
}
