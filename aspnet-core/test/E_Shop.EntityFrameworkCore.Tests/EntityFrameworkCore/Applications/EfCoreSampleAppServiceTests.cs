using E_Shop.Samples;
using Xunit;

namespace E_Shop.EntityFrameworkCore.Applications;

[Collection(E_ShopTestConsts.CollectionDefinitionName)]
public class EfCoreSampleAppServiceTests : SampleAppServiceTests<E_ShopEntityFrameworkCoreTestModule>
{

}
