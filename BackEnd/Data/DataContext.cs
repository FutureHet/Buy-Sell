using Microsoft.EntityFrameworkCore; 
using BackEnd.Models;

namespace BackEnd.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) {}

        public DbSet<City> Cities { get; set; }
    }
}