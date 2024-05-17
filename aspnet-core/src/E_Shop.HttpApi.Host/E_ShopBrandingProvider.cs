using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace E_Shop;

[Dependency(ReplaceServices = true)]
public class E_ShopBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "E_Shop";
}
