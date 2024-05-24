using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace E_Shop.Migrations
{
    /// <inheritdoc />
    public partial class @new : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "PRODUCTTAG_ID",
                table: "ESProductTag",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AlterColumn<long>(
                name: "PRODUCTIMAGE_FILESIZE",
                table: "ESProductImage",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ESProductTag",
                table: "ESProductTag",
                column: "PRODUCTTAG_ID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ESProductTag",
                table: "ESProductTag");

            migrationBuilder.DropColumn(
                name: "PRODUCTTAG_ID",
                table: "ESProductTag");

            migrationBuilder.AlterColumn<long>(
                name: "PRODUCTIMAGE_FILESIZE",
                table: "ESProductImage",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);
        }
    }
}
