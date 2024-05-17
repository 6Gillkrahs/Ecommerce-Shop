using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace E_Shop.Data;

/* This is used if database provider does't define
 * IE_ShopDbSchemaMigrator implementation.
 */
public class NullE_ShopDbSchemaMigrator : IE_ShopDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
