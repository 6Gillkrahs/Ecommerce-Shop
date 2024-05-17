using E_Shop.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.BlobStoring;
using Volo.Abp.Domain.Entities.Auditing;

namespace E_Shop.Images
{
    public class ProductImage: FullAuditedAggregateRoot<Guid>
    {
        public string Name { get; set; }
        public Product Product { get; set; }
        public Guid ProductId { get; set; }
        public string  Updateby { get; set; }
        public long FileSize { get; set; }



        protected ProductImage() { }

        public ProductImage(Guid id,string Name,Guid ProductId,string Updateby,long FileSize)
        {
            this.Id = id;
            this.Name = Name;
            this.ProductId = ProductId;
            this.Updateby = Updateby;
            this.FileSize = FileSize;
        }
    }
}
