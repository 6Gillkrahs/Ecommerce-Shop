using Volo.Abp.Modularity;

namespace E_Shop;

[DependsOn(
    typeof(E_ShopDomainModule),
    typeof(E_ShopTestBaseModule)
)]
public class E_ShopDomainTestModule : AbpModule
{

}
