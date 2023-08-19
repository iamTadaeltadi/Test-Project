using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace songApi.Migrations
{
    /// <inheritdoc />
    public partial class AddAudioDataToSong : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "AudioData",
                table: "Songs",
                type: "bytea",
                nullable: false,
                defaultValue: new byte[0]);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AudioData",
                table: "Songs");
        }
    }
}
