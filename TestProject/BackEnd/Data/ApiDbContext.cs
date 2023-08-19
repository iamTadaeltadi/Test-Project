using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using songApi.Model;

namespace songApi.Data
{
        public class ApiDbContext : DbContext
        {
            public DbSet<Song> Songs { get; set; }

            public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
            {
            }

            
        }

}

