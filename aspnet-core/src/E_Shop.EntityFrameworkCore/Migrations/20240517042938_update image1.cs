using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace E_Shop.Migrations
{
    /// <inheritdoc />
    public partial class updateimage1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ESProductImage_ESProduct_PRODUCTIMAGE_PRODUCTID",
                table: "ESProductImage");

            migrationBuilder.AddForeignKey(
                name: "FK_ESProductImage_ESProduct_PRODUCTIMAGE_PRODUCTID",
                table: "ESProductImage",
                column: "PRODUCTIMAGE_PRODUCTID",
                principalTable: "ESProduct",
                principalColumn: "PRODUCT_ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ESProductImage_ESProduct_PRODUCTIMAGE_PRODUCTID",
                table: "ESProductImage");

            migrationBuilder.AddForeignKey(
                name: "FK_ESProductImage_ESProduct_PRODUCTIMAGE_PRODUCTID",
                table: "ESProductImage",
                column: "PRODUCTIMAGE_PRODUCTID",
                principalTable: "ESProduct",
                principalColumn: "PRODUCT_ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
