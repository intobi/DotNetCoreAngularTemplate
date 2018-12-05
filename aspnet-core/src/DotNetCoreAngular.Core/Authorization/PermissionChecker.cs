using Abp.Authorization;
using DotNetCoreAngular.Authorization.Roles;
using DotNetCoreAngular.Authorization.Users;

namespace DotNetCoreAngular.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
