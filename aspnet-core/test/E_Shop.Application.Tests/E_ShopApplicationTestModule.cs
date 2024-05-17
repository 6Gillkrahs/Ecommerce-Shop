using Volo.Abp.Modularity;

namespace E_Shop;

[DependsOn(
    typeof(E_ShopApplicationModule),
    typeof(E_ShopDomainTestModule)
)]
public class E_ShopApplicationTestModule : AbpModule
{

}
