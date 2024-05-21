using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;
using Volo.Abp.MultiTenancy;

namespace E_Shop.Documents
{
    public class Document : FullAuditedAggregateRoot<Guid>, IMultiTenant
    {
        public long FileSize { get; set; }

        public string MimeType { get; set; }

        public Guid? TenantId { get; set; }

        protected Document()
        {
        }

        public Document(
            Guid id,
            long fileSize,
            string mimeType,
            Guid? tenantId
        ) : base(id)
        {
            FileSize = fileSize;
            MimeType = mimeType;
            TenantId = tenantId;
        }
    }
}
