using E_Shop.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace E_Shop.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class E_ShopController : AbpControllerBase
{
    protected E_ShopController()
    {
        LocalizationResource = typeof(E_ShopResource);
    }
}
