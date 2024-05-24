using E_Shop.Products;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using static Volo.Abp.Identity.Settings.IdentitySettingNames;

namespace E_Shop.Tags
{
    public class ProductTag : Entity<Guid>
    {
        public Product Products { get; set; }
        public Guid ProductId { get; set; }
        public Tag Tags { get; set; }
        public Guid TagId { get; set; }

        public ProductTag()
        {
        }

        public override object[] GetKeys()
        {
            return new object[] { ProductId, TagId };
        }

        public ProductTag(Guid ProductId, Guid TagId)
        {
            this.ProductId = ProductId;
            this.TagId = TagId;
        }

    }
}
