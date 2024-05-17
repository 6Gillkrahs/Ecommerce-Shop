using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using E_Shop.Data;
using Volo.Abp.DependencyInjection;

namespace E_Shop.EntityFrameworkCore;

public class EntityFrameworkCoreE_ShopDbSchemaMigrator
    : IE_ShopDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreE_ShopDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the E_ShopDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<E_ShopDbContext>()
            .Database
            .MigrateAsync();
    }
}
