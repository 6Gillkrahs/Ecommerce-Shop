using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace E_Shop.Tags.Dtos
{
    public class TagDto:EntityDto<Guid>
    {
        public string Label { get; set; }
        public string Slug { get; set; }
    }
}
