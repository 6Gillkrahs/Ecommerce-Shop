using System.Threading.Tasks;

namespace E_Shop.Data;

public interface IE_ShopDbSchemaMigrator
{
    Task MigrateAsync();
}
