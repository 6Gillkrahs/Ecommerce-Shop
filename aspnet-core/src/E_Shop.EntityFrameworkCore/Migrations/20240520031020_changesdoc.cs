using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace E_Shop.Migrations
{
    /// <inheritdoc />
    public partial class changesdoc : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "SYS_C435324523812",
                table: "ESDocument");

            migrationBuilder.DropColumn(
                name: "NAME",
                table: "ESDocument");

            migrationBuilder.DropColumn(
                name: "UPDATEBY",
                table: "ESDocument");

            migrationBuilder.DropColumn(
                name: "UPDATEDATE",
                table: "ESDocument");

            migrationBuilder.DropColumn(
                name: "WORKID",
                table: "ESDocument");

            migrationBuilder.RenameColumn(
                name: "MIMETYPE",
                table: "ESDocument",
                newName: "MimeType");

            migrationBuilder.RenameColumn(
                name: "FILESIZE",
                table: "ESDocument",
                newName: "FileSize");

            migrationBuilder.AddColumn<Guid>(
                name: "TenantId",
                table: "ESDocument",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_ESDocument",
                table: "ESDocument",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_ESDocument",
                table: "ESDocument");

            migrationBuilder.DropColumn(
                name: "TenantId",
                table: "ESDocument");

            migrationBuilder.RenameColumn(
                name: "MimeType",
                table: "ESDocument",
                newName: "MIMETYPE");

            migrationBuilder.RenameColumn(
                name: "FileSize",
                table: "ESDocument",
                newName: "FILESIZE");

            migrationBuilder.AddColumn<string>(
                name: "NAME",
                table: "ESDocument",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "UPDATEBY",
                table: "ESDocument",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "UPDATEDATE",
                table: "ESDocument",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<Guid>(
                name: "WORKID",
                table: "ESDocument",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddPrimaryKey(
                name: "SYS_C435324523812",
                table: "ESDocument",
                column: "Id");
        }
    }
}
