using Microsoft.EntityFrameworkCore;
using Task = backend.Models.Task;

namespace backend.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Task> Tasks { get; set; }
}