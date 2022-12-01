using Microsoft.EntityFrameworkCore;
using SPM.API.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<SPMDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("SPMConnectionString")
));



    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }
   
    app.UseHttpsRedirection();

    //enable cors
    app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());


    app.UseAuthorization();

    app.MapControllers();

    app.Run();

