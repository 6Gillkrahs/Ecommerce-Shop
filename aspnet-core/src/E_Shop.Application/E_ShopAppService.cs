using System;
using System.Collections.Generic;
using System.Text;
using E_Shop.Localization;
using Volo.Abp.Application.Services;

namespace E_Shop;

/* Inherit your application services from this class.
 */
public abstract class E_ShopAppService : ApplicationService
{
    protected E_ShopAppService()
    {
        LocalizationResource = typeof(E_ShopResource);
    }
}
