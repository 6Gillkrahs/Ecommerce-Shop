using System;
using System.Collections.Generic;
using System.Text;

namespace E_Shop.Tags.Dtos
{
    public class CreateUpdateProductTagDto
    {      
        public Guid ProductId { get; set; }
        public Guid TagId { get; set; }
    }
}
