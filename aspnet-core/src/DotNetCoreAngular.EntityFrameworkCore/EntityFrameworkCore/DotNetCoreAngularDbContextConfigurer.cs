using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace DotNetCoreAngular.EntityFrameworkCore
{
    public static class DotNetCoreAngularDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<DotNetCoreAngularDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<DotNetCoreAngularDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
