using E_Shop.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace E_Shop.Permissions;

public class E_ShopPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(E_ShopPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(E_ShopPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<E_ShopResource>(name);
    }
}
