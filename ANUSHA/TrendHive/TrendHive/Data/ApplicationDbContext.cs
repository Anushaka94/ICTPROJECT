using Microsoft.EntityFrameworkCore;
using TrendHive.Models;

namespace TrendHive.Data
{
    public class ApplicationDbContext:DbContext
    {
        
            public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
            {

            }
            public DbSet<Userlogin> userlogins { get; set; }
            public DbSet<Dressdetail> dressdetails { get; set; }
            public DbSet<Oderdetail> oderdetails { get; set; }
    }
}
