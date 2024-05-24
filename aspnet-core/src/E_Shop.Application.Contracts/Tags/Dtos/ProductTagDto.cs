using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace E_Shop.Tags.Dtos
{
    public class ProductTagDto : EntityDto<Guid>
    {
        public string ProductName { get; set; }
        public Guid ProductId { get; set; }
        public Guid TagId { get; set; }
        public string TagName { get; set; }
    }
}
