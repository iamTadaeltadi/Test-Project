using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace songApi.Migrations
{
    /// <inheritdoc />
    public partial class Intial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageData",
                table: "Songs");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "ImageData",
                table: "Songs",
                type: "bytea",
                nullable: false,
                defaultValue: new byte[0]);
        }
    }
}
