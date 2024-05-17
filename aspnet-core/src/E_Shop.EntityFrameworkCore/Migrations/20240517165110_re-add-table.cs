using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace E_Shop.Migrations
{
    /// <inheritdoc />
    public partial class readdtable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ESColorSize",
                columns: table => new
                {
                    ColorSize_ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ColorSize_PRODUCTID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ColorSize_COLOR = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ColorSize_SIZE = table.Column<int>(type: "int", nullable: false),
                    ColorSize_QUANTITY = table.Column<int>(type: "int", nullable: false),
                    ColorSize_ISACTIVE = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("SYS_211200932", x => x.ColorSize_ID);
                    table.ForeignKey(
                        name: "FK_ESColorSize_ESProduct_ColorSize_PRODUCTID",
                        column: x => x.ColorSize_PRODUCTID,
                        principalTable: "ESProduct",
                        principalColumn: "PRODUCT_ID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ESColorSize_ColorSize_PRODUCTID",
                table: "ESColorSize",
                column: "ColorSize_PRODUCTID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ESColorSize");
        }
    }
}
