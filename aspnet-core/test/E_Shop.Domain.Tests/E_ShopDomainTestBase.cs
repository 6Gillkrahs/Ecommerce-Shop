using Volo.Abp.Modularity;

namespace E_Shop;

/* Inherit from this class for your domain layer tests. */
public abstract class E_ShopDomainTestBase<TStartupModule> : E_ShopTestBase<TStartupModule>
    where TStartupModule : IAbpModule
{

}
