using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using DotNetCoreAngular.Authorization.Roles;
using DotNetCoreAngular.Authorization.Users;
using DotNetCoreAngular.MultiTenancy;

namespace DotNetCoreAngular.EntityFrameworkCore
{
    public class DotNetCoreAngularDbContext : AbpZeroDbContext<Tenant, Role, User, DotNetCoreAngularDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public DotNetCoreAngularDbContext(DbContextOptions<DotNetCoreAngularDbContext> options)
            : base(options)
        {
        }
    }
}
