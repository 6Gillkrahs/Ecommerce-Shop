using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace E_Shop.Migrations
{
    /// <inheritdoc />
    public partial class addsizeandcolortable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ESSizeColorValue",
                columns: table => new
                {
                    SizeColorValue_ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SizeColorValue_PRODUCTID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SizeColorValue_COLORNAME = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SizeColorValue_SIZE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SizeColorValue_VALUES = table.Column<int>(type: "int", nullable: false),
                    SizeColorValue_ISACTIVE = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("SYS_211200932", x => x.SizeColorValue_ID);
                    table.ForeignKey(
                        name: "FK_ESSizeColorValue_ESProduct_SizeColorValue_PRODUCTID",
                        column: x => x.SizeColorValue_PRODUCTID,
                        principalTable: "ESProduct",
                        principalColumn: "PRODUCT_ID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ESSizeColorValue_SizeColorValue_PRODUCTID",
                table: "ESSizeColorValue",
                column: "SizeColorValue_PRODUCTID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ESSizeColorValue");
        }
    }
}
