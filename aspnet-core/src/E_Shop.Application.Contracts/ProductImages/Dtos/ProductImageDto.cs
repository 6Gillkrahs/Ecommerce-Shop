using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace E_Shop.ProductImages.Dtos
{
    public class ProductImageDto : EntityDto<Guid>
    {
        public string Name { get; set; }
        public Guid ProductId { get; set; }
        public string Updateby { get; set; }
        public long FileSize { get; set; }
    }
}
