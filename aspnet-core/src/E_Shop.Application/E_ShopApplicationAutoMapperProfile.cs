using AutoMapper;
using E_CommerceShop.Reviews.Dtos;
using E_Shop.Attributes;
using E_Shop.Attributes.Dtos;
using E_Shop.Categories;
using E_Shop.Categories.Dtos;
using E_Shop.ColorSizes;
using E_Shop.ColorSizes.Dtos;
using E_Shop.Images;
using E_Shop.Manufacturers;
using E_Shop.Manufacturers.Dtos;
using E_Shop.ProductImages.Dtos;
using E_Shop.Products;
using E_Shop.Products.Dtos;
using E_Shop.Reviews;


namespace E_Shop;

public class E_ShopApplicationAutoMapperProfile : Profile
{
    public E_ShopApplicationAutoMapperProfile()
    {
        /* You can configure your AutoMapper mapping configuration here.
         * Alternatively, you can split your mapping configurations
         * into multiple profile classes for a better organization. */
        CreateMap<Manufacturer, ManufacturerDto>().ReverseMap();
        CreateMap<CreateManufacturerDto, Manufacturer>().ReverseMap();
        CreateMap<UpdateManufacturerDto, Manufacturer>().ReverseMap();


        CreateMap<Category, CategoryDto>().ReverseMap();
        CreateMap<CreateCategoryDto, Category>().ReverseMap();
        CreateMap<UpdateCategoryDto, Category>().ReverseMap();


        CreateMap<Attribute, AttributeDto>().ReverseMap();
        CreateMap<CreateAttributeDto, Attribute>().ReverseMap();
        CreateMap<UpdateAttributeDto, Attribute>().ReverseMap();

        CreateMap<Product, ProductDto>().ReverseMap();
        CreateMap<CreateUpdateProduct, Product>().ReverseMap();
        CreateMap<Category, CategoryLookupDto>().ReverseMap();

       
        CreateMap<ProductAttribute, ProductAttributeDto>().ReverseMap();
        CreateMap<CreateProductAttribute, ProductAttribute>().ReverseMap();
        CreateMap<UpdateProductAttributeDto, ProductAttribute>().ReverseMap();

        CreateMap<Review, ReviewDto>().ReverseMap();
        CreateMap<CreateUpdateReviewDto, Review>().ReverseMap();


        CreateMap<ProductImage, ProductImageDto>().ReverseMap();

        CreateMap<ColorSize,ColorSizeDto>().ReverseMap();
        CreateMap<CreateColorSizeDto, ColorSize>().ReverseMap();



    }
}
