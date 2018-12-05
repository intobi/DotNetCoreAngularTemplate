using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using DotNetCoreAngular.Authorization;

namespace DotNetCoreAngular
{
    [DependsOn(
        typeof(DotNetCoreAngularCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class DotNetCoreAngularApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<DotNetCoreAngularAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(DotNetCoreAngularApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddProfiles(thisAssembly)
            );
        }
    }
}
