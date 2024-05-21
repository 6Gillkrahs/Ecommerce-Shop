using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace E_Shop.Documents.IServices
{
    public interface IDocumentAppService : IApplicationService
    {
        //Task SaveBytesAsync(List<IFormFile> files, Guid WorkId);
        //Task DeleteBytesAsync(string name);
        //Task<PagedResultDto<DocumentDto>> GetAll(DocumentGetListInput input);
    }
}
