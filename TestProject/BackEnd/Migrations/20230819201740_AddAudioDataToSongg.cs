using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace songApi.Migrations
{
    /// <inheritdoc />
    public partial class AddAudioDataToSongg : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AudioData",
                table: "Songs");

            migrationBuilder.AddColumn<string>(
                name: "AudioDataAsBase64",
                table: "Songs",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AudioDataAsBase64",
                table: "Songs");

            migrationBuilder.AddColumn<byte[]>(
                name: "AudioData",
                table: "Songs",
                type: "bytea",
                nullable: false,
                defaultValue: new byte[0]);
        }
    }
}
