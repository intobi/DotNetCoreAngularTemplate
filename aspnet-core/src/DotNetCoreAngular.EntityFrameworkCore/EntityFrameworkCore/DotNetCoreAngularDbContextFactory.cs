using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using DotNetCoreAngular.Configuration;
using DotNetCoreAngular.Web;

namespace DotNetCoreAngular.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class DotNetCoreAngularDbContextFactory : IDesignTimeDbContextFactory<DotNetCoreAngularDbContext>
    {
        public DotNetCoreAngularDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<DotNetCoreAngularDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            DotNetCoreAngularDbContextConfigurer.Configure(builder, configuration.GetConnectionString(DotNetCoreAngularConsts.ConnectionStringName));

            return new DotNetCoreAngularDbContext(builder.Options);
        }
    }
}
