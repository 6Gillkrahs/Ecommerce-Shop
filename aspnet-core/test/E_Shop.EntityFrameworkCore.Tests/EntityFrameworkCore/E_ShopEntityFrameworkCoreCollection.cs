using Xunit;

namespace E_Shop.EntityFrameworkCore;

[CollectionDefinition(E_ShopTestConsts.CollectionDefinitionName)]
public class E_ShopEntityFrameworkCoreCollection : ICollectionFixture<E_ShopEntityFrameworkCoreFixture>
{

}
