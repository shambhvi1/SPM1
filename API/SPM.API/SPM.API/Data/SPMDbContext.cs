using Microsoft.EntityFrameworkCore;
using SPM.API.models;

namespace SPM.API.Data
{
    public class SPMDbContext : DbContext
    {
        public SPMDbContext(DbContextOptions options) : base(options)
        {
        }

        //Create and access table and communicate with it
        public DbSet<Product> Products
        { get; set; }
        public DbSet<Customer> Customers
        { get; set; } 
    }
}
