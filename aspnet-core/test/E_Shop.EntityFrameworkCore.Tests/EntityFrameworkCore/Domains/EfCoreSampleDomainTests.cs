using E_Shop.Samples;
using Xunit;

namespace E_Shop.EntityFrameworkCore.Domains;

[Collection(E_ShopTestConsts.CollectionDefinitionName)]
public class EfCoreSampleDomainTests : SampleDomainTests<E_ShopEntityFrameworkCoreTestModule>
{

}
