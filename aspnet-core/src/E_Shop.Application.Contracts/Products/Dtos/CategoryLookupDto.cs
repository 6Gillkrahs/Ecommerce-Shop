using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace E_Shop.Products.Dtos
{
    public class CategoryLookupDto: EntityDto<Guid>
    {
        public string CategoryName { get; set; }
    }
}
