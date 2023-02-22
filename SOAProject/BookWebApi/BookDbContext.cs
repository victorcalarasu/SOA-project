using BookWebApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace BookWebApi
{
    public class BookDbContext: DbContext
    {
        public DbSet<Book> Books { get; set; }

        public BookDbContext(DbContextOptions<BookDbContext> dbContextOptions) : base(dbContextOptions)
        {
            try
            {
                var databaseCreator = Database.GetService<IDatabaseCreator>() as RelationalDatabaseCreator;
                if (databaseCreator != null)
                {
                    if (!databaseCreator.CanConnect()) databaseCreator.Create();
                    if (!databaseCreator.HasTables()) databaseCreator.CreateTables();
                }
            }
            catch(Exception ex)
            { 
                Console.WriteLine(ex.Message);
            }
        
        }
    }
}
