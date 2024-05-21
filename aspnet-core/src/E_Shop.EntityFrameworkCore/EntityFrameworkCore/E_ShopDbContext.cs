using E_Shop.Attributes;
using E_Shop.Categories;
using E_Shop.ColorSizes;
using E_Shop.Documents;
using E_Shop.Images;
using E_Shop.Manufacturers;
using E_Shop.Products;
using E_Shop.Reviews;
using E_Shop.Tags;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement;
using Volo.Abp.TenantManagement.EntityFrameworkCore;

namespace E_Shop.EntityFrameworkCore;

[ReplaceDbContext(typeof(IIdentityDbContext))]
[ReplaceDbContext(typeof(ITenantManagementDbContext))]
[ConnectionStringName("Default")]
public class E_ShopDbContext :
    AbpDbContext<E_ShopDbContext>,
    IIdentityDbContext,
    ITenantManagementDbContext
{
    /* Add DbSet properties for your Aggregate Roots / Entities here. */
    public DbSet<Product> Products { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<Tag> Tags { get; set; }
    public DbSet<Attribute> Attributes { get; set; }
    public DbSet<ProductAttribute> AttibuteDateTime { get; set; }
    public DbSet<Manufacturer> Manufaturers { get; set; }
    public DbSet<Review> Reviews { get; set; }
    public DbSet<ProductTag> ProductTags { get; set; }
    public DbSet<ProductImage> ProductImages { get; set; }
    public DbSet<ColorSize> ColorSizes { get; set; }
    public DbSet<Document> Documents { get; set; }

    #region Entities from the modules

    /* Notice: We only implemented IIdentityDbContext and ITenantManagementDbContext
     * and replaced them for this DbContext. This allows you to perform JOIN
     * queries for the entities of these modules over the repositories easily. You
     * typically don't need that for other modules. But, if you need, you can
     * implement the DbContext interface of the needed module and use ReplaceDbContext
     * attribute just like IIdentityDbContext and ITenantManagementDbContext.
     *
     * More info: Replacing a DbContext of a module ensures that the related module
     * uses this DbContext on runtime. Otherwise, it will use its own DbContext class.
     */

    //Identity
    public DbSet<IdentityUser> Users { get; set; }
    public DbSet<IdentityRole> Roles { get; set; }
    public DbSet<IdentityClaimType> ClaimTypes { get; set; }
    public DbSet<OrganizationUnit> OrganizationUnits { get; set; }
    public DbSet<IdentitySecurityLog> SecurityLogs { get; set; }
    public DbSet<IdentityLinkUser> LinkUsers { get; set; }
    public DbSet<IdentityUserDelegation> UserDelegations { get; set; }

    // Tenant Management
    public DbSet<Tenant> Tenants { get; set; }
    public DbSet<TenantConnectionString> TenantConnectionStrings { get; set; }

    #endregion

    public E_ShopDbContext(DbContextOptions<E_ShopDbContext> options)
        : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /* Include modules to your migration db context */

        builder.ConfigurePermissionManagement();
        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureIdentity();
        builder.ConfigureOpenIddict();
        builder.ConfigureFeatureManagement();
        builder.ConfigureTenantManagement();

        /* Configure your own tables/entities inside here */

        //builder.Entity<YourEntity>(b =>
        //{
        //    b.ToTable(E_ShopConsts.DbTablePrefix + "YourEntities", E_ShopConsts.DbSchema);
        //    b.ConfigureByConvention(); //auto configure for the base class props
        //    //...
        //});
        builder.Entity<Category>(b =>
        {
            b.HasKey(x => x.Id).HasName("SYS_211200921");
            b.ToTable(E_ShopConsts.DbTablePrefix + "Category", E_ShopConsts.DbSchema);
            b.Property(x => x.Id).HasColumnName("CATEGORY_ID");
            b.Property(x => x.Name).HasColumnName("CATEGORY_NAME");
            b.Property(x => x.Code).HasColumnName("CATEGORY_CODE");
            b.Property(x => x.Slug).HasColumnName("CATEGORY_SLUG");
            b.Property(x => x.SortOrder).HasColumnName("CATEGORY_SORTORDER");
            b.Property(x => x.Visibility).HasColumnName("CATEGORY_VISIBILITY");
            b.Property(x => x.isActive).HasColumnName("CATEGORY_ISACTIVE");
            b.Property(x => x.ParentId).HasColumnName("CATEGORY_PARENTID");
            b.Property(x => x.SEOMetaDecription).HasColumnName("CATEGORY_METADECRIPTION");
            b.ConfigureByConvention();
        });
        builder.Entity<Tag>(b =>
        {
            b.HasKey(x => x.Id).HasName("SYS_211200922");
            b.ToTable(E_ShopConsts.DbTablePrefix + "Tag", E_ShopConsts.DbSchema);
            b.Property(x => x.Id).HasColumnName("TAG_ID");
            b.Property(x => x.Label).HasColumnName("TAG_LABEL");
            b.Property(x => x.Slug).HasColumnName("TAG_SLUG");
            b.ConfigureByConvention();
        });
        builder.Entity<Attribute>(b =>
        {
            b.HasKey(x => x.Id).HasName("SYS_211200923");
            b.ToTable(E_ShopConsts.DbTablePrefix + "Attribute", E_ShopConsts.DbSchema);
            b.Property(x => x.Id).HasColumnName("ATTIBUTE_ID");
            b.Property(x => x.Code).HasColumnName("ATTIBUTE_CODE");
            b.Property(x => x.Type).HasColumnName("ATTIBUTE_TYPE");
            b.Property(x => x.Label).HasColumnName("ATTIBUTE_LABEL");
            b.Property(x => x.SortOrder).HasColumnName("ATTIBUTE_SORTORDER");
            b.Property(x => x.Visibility).HasColumnName("ATTIBUTE_VISIBILITY");
            b.Property(x => x.isActive).HasColumnName("ATTIBUTE_ISACTIVE");
            b.Property(x => x.isRequired).HasColumnName("ATTIBUTE_ISREQUIRED");
            b.Property(x => x.isUnique).HasColumnName("ATTIBUTE_ISUNIQUE");
            b.Property(x => x.Note).HasColumnName("ATTIBUTE_NOTE");
            b.ConfigureByConvention();
        });
        builder.Entity<Manufacturer>(b =>
        {
            b.HasKey(x => x.Id).HasName("SYS_211200924");
            b.ToTable(E_ShopConsts.DbTablePrefix + "Manufaturer", E_ShopConsts.DbSchema);
            b.Property(x => x.Id).HasColumnName("MANUFATURER_ID");
            b.Property(x => x.Name).HasColumnName("MANUFATURER_NAME");
            b.Property(x => x.Code).HasColumnName("MANUFATURER_CODE");
            b.Property(x => x.Slug).HasColumnName("MANUFATURER_SLUG");
            b.Property(x => x.Visibility).HasColumnName("MANUFATURER_VISIBILITY");
            b.Property(x => x.isActive).HasColumnName("MANUFATURER_ISACTIVE");
            b.Property(x => x.Country).HasColumnName("MANUFATURER_COUNTRY");
            b.ConfigureByConvention();
        });
        builder.Entity<Review>(b =>
        {
            b.HasKey(x => x.Id).HasName("SYS_211200925");
            b.ToTable(E_ShopConsts.DbTablePrefix + "Review", E_ShopConsts.DbSchema);
            b.Property(x => x.Id).HasColumnName("REVIEW_ID");
            b.Property(x => x.ProductId).HasColumnName("REVIEW_PRODUCTID");
            b.Property(x => x.ParentId).HasColumnName("REVIEW_PARENTID");
            b.Property(x => x.Title).HasColumnName("REVIEW_TITLE");
            b.Property(x => x.Rating).HasColumnName("REVIEW_RATING");
            b.Property(x => x.CreatedAt).HasColumnName("REVIEW_CREATEDAT");
            b.Property(x => x.PublishedAt).HasColumnName("REVIEW_PUBLISHEDAT");
            b.Property(x => x.Content).HasColumnName("REVIEW_CONTENT");
            b.Property(x => x.UserId).HasColumnName("REVIEW_USERID");
            b.Property(x => x.SortId).HasColumnName("REVIEW_SORTID");
            b.HasOne(x => x.Products)
            .WithMany(p => p.Reviews)
            .HasForeignKey(x => x.ProductId)
            .IsRequired(false);
            b.ConfigureByConvention();
        });
        builder.Entity<ProductAttribute>(b =>
        {
            b.HasKey(x => x.Id).HasName("SYS_211200926");
            b.ToTable(E_ShopConsts.DbTablePrefix + "ProductAttribute", E_ShopConsts.DbSchema);
            b.Property(x => x.Id).HasColumnName("A_ID");
            b.Property(x => x.AttributeId).HasColumnName("A_ATTRIBUTEID");
            b.Property(x => x.ProductId).HasColumnName("A_PRODUCTID");
            b.Property(x => x.Value).HasColumnName("A_VALUE");
            b.HasOne(x => x.Product)
            .WithMany(p => p.productAttributes)
            .HasForeignKey(x => x.ProductId)
            .IsRequired(false);
            b.ConfigureByConvention();
        });
        builder.Entity<ProductTag>(b =>
        {
            b.ToTable(E_ShopConsts.DbTablePrefix + "ProductTag", E_ShopConsts.DbSchema);
            b.HasNoKey();
            b.Property(x => x.ProductId).HasColumnName("PRODUCTTAG_PRODUCTID");
            b.Property(x => x.TagId).HasColumnName("PRODUCTTAG_TAGID");
            b.ConfigureByConvention();
        });
        builder.Entity<Product>(b =>
        {
            b.HasKey(x => x.Id).HasName("SYS_211200930");
            b.ToTable(E_ShopConsts.DbTablePrefix + "Product", E_ShopConsts.DbSchema);
            b.Property(x => x.Id).HasColumnName("PRODUCT_ID");
            b.Property(x => x.ManufacturerId).HasColumnName("PRODUCT_MAMUFACTUREID");
            b.Property(x => x.Code).HasColumnName("PRODUCT_CODE");
            b.Property(x => x.ProductType).HasColumnName("PRODUCT_PRODUCTTYPE");
            b.Property(x => x.SortOrder).HasColumnName("PRODUCT_SORTORDER");
            b.Property(x => x.Visibility).HasColumnName("PRODUCT_VISIBILITY");
            b.Property(x => x.isActive).HasColumnName("PRODUCT_ISACTIVE");
            b.Property(x => x.CategoryId).HasColumnName("PRODUCT_CATEGORYID");
            b.HasOne(x => x.Category)
            .WithMany(p => p.products)
            .HasForeignKey(x => x.CategoryId)
            .IsRequired(false);

            b.ConfigureByConvention();
        });
        builder.Entity<ProductImage>(b =>
        {
            b.HasKey(x => x.Id).HasName("SYS_211200931");
            b.ToTable(E_ShopConsts.DbTablePrefix + "ProductImage", E_ShopConsts.DbSchema);
            b.Property(x => x.Id).HasColumnName("PRODUCTIMAGE_ID");
            b.Property(x => x.Name).HasColumnName("PRODUCTIMAGE_NAME");
            b.Property(x => x.ProductId).HasColumnName("PRODUCTIMAGE_PRODUCTID");
            b.Property(x => x.Updateby).HasColumnName("PRODUCTIMAGE_UPDATEBY");
            b.Property(x => x.FileSize).HasColumnName("PRODUCTIMAGE_FILESIZE");
            b.HasOne(x => x.Product)
            .WithMany(p => p.productImages)
            .HasForeignKey(x => x.ProductId)
            .IsRequired(false);
            b.ConfigureByConvention();
        });
        builder.Entity<ColorSize>(b =>
        {
            b.HasKey(x => x.Id).HasName("SYS_211200932");
            b.ToTable(E_ShopConsts.DbTablePrefix + "ColorSize", E_ShopConsts.DbSchema);
            b.Property(x => x.Id).HasColumnName("ColorSize_ID");
            b.Property(x => x.Color).HasColumnName("ColorSize_COLOR");
            b.Property(x => x.ProductId).HasColumnName("ColorSize_PRODUCTID");
            b.Property(x => x.Size).HasColumnName("ColorSize_SIZE");
            b.Property(x => x.Quantity).HasColumnName("ColorSize_QUANTITY");
            b.Property(x => x.isActive).HasColumnName("ColorSize_ISACTIVE");
            b.HasOne(x => x.Product)
            .WithMany(p => p.ColorSizes)
            .HasForeignKey(x => x.ProductId)
            .IsRequired(false);
            b.ConfigureByConvention();
        });
        builder.Entity<Document>(b =>
        {
            b.ToTable(E_ShopConsts.DbTablePrefix + "Document", E_ShopConsts.DbSchema);
            b.ConfigureByConvention();
        });

    }
}
