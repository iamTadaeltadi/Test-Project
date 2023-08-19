using Microsoft.EntityFrameworkCore;
using songApi.Data;
using songApi.services;
using static songApi.services.songServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var provider =builder.Services.BuildServiceProvider();
var configuration =provider.GetRequiredService<IConfiguration>();
builder.Services.AddCors(options=>
{
    var frontendURL = configuration.GetValue<string>("frontend_url");
    options.AddDefaultPolicy(builder=>
    {
        builder.WithOrigins(frontendURL).AllowAnyMethod().AllowAnyHeader();
    });

}
);
builder.Services.AddScoped<SongService>();
builder.Services.AddEntityFrameworkNpgsql()
    .AddDbContext<ApiDbContext>(opt =>
        opt.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
