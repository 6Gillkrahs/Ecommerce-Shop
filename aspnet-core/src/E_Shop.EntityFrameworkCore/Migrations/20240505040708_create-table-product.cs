using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace E_Shop.Migrations
{
    /// <inheritdoc />
    public partial class createtableproduct : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ESAttribute",
                columns: table => new
                {
                    ATTIBUTE_ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ATTIBUTE_CODE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ATTIBUTE_TYPE = table.Column<int>(type: "int", nullable: false),
                    ATTIBUTE_LABEL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ATTIBUTE_SORTORDER = table.Column<int>(type: "int", nullable: false),
                    ATTIBUTE_VISIBILITY = table.Column<bool>(type: "bit", nullable: false),
                    ATTIBUTE_ISACTIVE = table.Column<bool>(type: "bit", nullable: false),
                    ATTIBUTE_ISREQUIRED = table.Column<bool>(type: "bit", nullable: false),
                    ATTIBUTE_ISUNIQUE = table.Column<bool>(type: "bit", nullable: false),
                    ATTIBUTE_NOTE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("SYS_211200923", x => x.ATTIBUTE_ID);
                });

            migrationBuilder.CreateTable(
                name: "ESCategory",
                columns: table => new
                {
                    CATEGORY_ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CATEGORY_NAME = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CATEGORY_CODE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CATEGORY_SLUG = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CATEGORY_SORTORDER = table.Column<int>(type: "int", nullable: false),
                    CATEGORY_VISIBILITY = table.Column<bool>(type: "bit", nullable: false),
                    CATEGORY_ISACTIVE = table.Column<bool>(type: "bit", nullable: false),
                    CATEGORY_PARENTID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CATEGORY_METADECRIPTION = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("SYS_211200921", x => x.CATEGORY_ID);
                });

            migrationBuilder.CreateTable(
                name: "ESManufaturer",
                columns: table => new
                {
                    MANUFATURER_ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MANUFATURER_NAME = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MANUFATURER_CODE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MANUFATURER_SLUG = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MANUFATURER_VISIBILITY = table.Column<bool>(type: "bit", nullable: false),
                    MANUFATURER_ISACTIVE = table.Column<bool>(type: "bit", nullable: false),
                    MANUFATURER_COUNTRY = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("SYS_211200924", x => x.MANUFATURER_ID);
                });

            migrationBuilder.CreateTable(
                name: "ESTag",
                columns: table => new
                {
                    TAG_ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TAG_LABEL = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TAG_SLUG = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("SYS_211200922", x => x.TAG_ID);
                });

            migrationBuilder.CreateTable(
                name: "ESProduct",
                columns: table => new
                {
                    PRODUCT_ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PRODUCT_MAMUFACTUREID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PRODUCT_CODE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PRODUCT_PRODUCTTYPE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SKU = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PRODUCT_SORTORDER = table.Column<int>(type: "int", nullable: false),
                    PRODUCT_VISIBILITY = table.Column<bool>(type: "bit", nullable: false),
                    PRODUCT_ISACTIVE = table.Column<bool>(type: "bit", nullable: false),
                    PRODUCT_CATEGORYID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    DeleterId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("SYS_211200930", x => x.PRODUCT_ID);
                    table.ForeignKey(
                        name: "FK_ESProduct_ESCategory_PRODUCT_CATEGORYID",
                        column: x => x.PRODUCT_CATEGORYID,
                        principalTable: "ESCategory",
                        principalColumn: "CATEGORY_ID");
                    table.ForeignKey(
                        name: "FK_ESProduct_ESManufaturer_PRODUCT_MAMUFACTUREID",
                        column: x => x.PRODUCT_MAMUFACTUREID,
                        principalTable: "ESManufaturer",
                        principalColumn: "MANUFATURER_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ESProductAttribute",
                columns: table => new
                {
                    A_ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    A_ATTRIBUTEID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    A_PRODUCTID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    A_VALUE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("SYS_211200926", x => x.A_ID);
                    table.ForeignKey(
                        name: "FK_ESProductAttribute_ESAttribute_A_ATTRIBUTEID",
                        column: x => x.A_ATTRIBUTEID,
                        principalTable: "ESAttribute",
                        principalColumn: "ATTIBUTE_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ESProductAttribute_ESProduct_A_PRODUCTID",
                        column: x => x.A_PRODUCTID,
                        principalTable: "ESProduct",
                        principalColumn: "PRODUCT_ID");
                });

            migrationBuilder.CreateTable(
                name: "ESProductTag",
                columns: table => new
                {
                    PRODUCTTAG_PRODUCTID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PRODUCTTAG_TAGID = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.ForeignKey(
                        name: "FK_ESProductTag_ESProduct_PRODUCTTAG_PRODUCTID",
                        column: x => x.PRODUCTTAG_PRODUCTID,
                        principalTable: "ESProduct",
                        principalColumn: "PRODUCT_ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ESProductTag_ESTag_PRODUCTTAG_TAGID",
                        column: x => x.PRODUCTTAG_TAGID,
                        principalTable: "ESTag",
                        principalColumn: "TAG_ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ESReview",
                columns: table => new
                {
                    REVIEW_ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    REVIEW_PRODUCTID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    REVIEW_PARENTID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    REVIEW_TITLE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    REVIEW_RATING = table.Column<int>(type: "int", nullable: false),
                    REVIEW_CREATEDAT = table.Column<DateTime>(type: "datetime2", nullable: false),
                    REVIEW_PUBLISHEDAT = table.Column<DateTime>(type: "datetime2", nullable: false),
                    REVIEW_CONTENT = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    REVIEW_USERID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    REVIEW_SORTID = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    ExtraProperties = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorId = table.Column<Guid>(type: "uniqueidentifier", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierId = table.Column<Guid>(type: "uniqueidentifier", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("SYS_211200925", x => x.REVIEW_ID);
                    table.ForeignKey(
                        name: "FK_ESReview_ESProduct_REVIEW_PRODUCTID",
                        column: x => x.REVIEW_PRODUCTID,
                        principalTable: "ESProduct",
                        principalColumn: "PRODUCT_ID");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ESProduct_PRODUCT_CATEGORYID",
                table: "ESProduct",
                column: "PRODUCT_CATEGORYID");

            migrationBuilder.CreateIndex(
                name: "IX_ESProduct_PRODUCT_MAMUFACTUREID",
                table: "ESProduct",
                column: "PRODUCT_MAMUFACTUREID");

            migrationBuilder.CreateIndex(
                name: "IX_ESProductAttribute_A_ATTRIBUTEID",
                table: "ESProductAttribute",
                column: "A_ATTRIBUTEID");

            migrationBuilder.CreateIndex(
                name: "IX_ESProductAttribute_A_PRODUCTID",
                table: "ESProductAttribute",
                column: "A_PRODUCTID");

            migrationBuilder.CreateIndex(
                name: "IX_ESProductTag_PRODUCTTAG_PRODUCTID",
                table: "ESProductTag",
                column: "PRODUCTTAG_PRODUCTID");

            migrationBuilder.CreateIndex(
                name: "IX_ESProductTag_PRODUCTTAG_TAGID",
                table: "ESProductTag",
                column: "PRODUCTTAG_TAGID");

            migrationBuilder.CreateIndex(
                name: "IX_ESReview_REVIEW_PRODUCTID",
                table: "ESReview",
                column: "REVIEW_PRODUCTID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ESProductAttribute");

            migrationBuilder.DropTable(
                name: "ESProductTag");

            migrationBuilder.DropTable(
                name: "ESReview");

            migrationBuilder.DropTable(
                name: "ESAttribute");

            migrationBuilder.DropTable(
                name: "ESTag");

            migrationBuilder.DropTable(
                name: "ESProduct");

            migrationBuilder.DropTable(
                name: "ESCategory");

            migrationBuilder.DropTable(
                name: "ESManufaturer");
        }
    }
}
