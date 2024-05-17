using Volo.Abp.Settings;

namespace E_Shop.Settings;

public class E_ShopSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(E_ShopSettings.MySetting1));
    }
}
