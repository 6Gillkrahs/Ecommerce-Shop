using E_Shop.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace E_Shop.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(E_ShopEntityFrameworkCoreModule),
    typeof(E_ShopApplicationContractsModule)
    )]
public class E_ShopDbMigratorModule : AbpModule
{
}
