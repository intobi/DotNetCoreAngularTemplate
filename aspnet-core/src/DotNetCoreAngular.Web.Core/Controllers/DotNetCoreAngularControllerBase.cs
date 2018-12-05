using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace DotNetCoreAngular.Controllers
{
    public abstract class DotNetCoreAngularControllerBase: AbpController
    {
        protected DotNetCoreAngularControllerBase()
        {
            LocalizationSourceName = DotNetCoreAngularConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
