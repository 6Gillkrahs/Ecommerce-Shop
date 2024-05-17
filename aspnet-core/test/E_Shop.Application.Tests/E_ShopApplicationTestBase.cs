using Volo.Abp.Modularity;

namespace E_Shop;

public abstract class E_ShopApplicationTestBase<TStartupModule> : E_ShopTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
