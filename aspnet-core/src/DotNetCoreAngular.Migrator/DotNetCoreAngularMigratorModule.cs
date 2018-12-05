using Microsoft.Extensions.Configuration;
using Castle.MicroKernel.Registration;
using Abp.Events.Bus;
using Abp.Modules;
using Abp.Reflection.Extensions;
using DotNetCoreAngular.Configuration;
using DotNetCoreAngular.EntityFrameworkCore;
using DotNetCoreAngular.Migrator.DependencyInjection;

namespace DotNetCoreAngular.Migrator
{
    [DependsOn(typeof(DotNetCoreAngularEntityFrameworkModule))]
    public class DotNetCoreAngularMigratorModule : AbpModule
    {
        private readonly IConfigurationRoot _appConfiguration;

        public DotNetCoreAngularMigratorModule(DotNetCoreAngularEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbSeed = true;

            _appConfiguration = AppConfigurations.Get(
                typeof(DotNetCoreAngularMigratorModule).GetAssembly().GetDirectoryPathOrNull()
            );
        }

        public override void PreInitialize()
        {
            Configuration.DefaultNameOrConnectionString = _appConfiguration.GetConnectionString(
                DotNetCoreAngularConsts.ConnectionStringName
            );

            Configuration.BackgroundJobs.IsJobExecutionEnabled = false;
            Configuration.ReplaceService(
                typeof(IEventBus), 
                () => IocManager.IocContainer.Register(
                    Component.For<IEventBus>().Instance(NullEventBus.Instance)
                )
            );
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(DotNetCoreAngularMigratorModule).GetAssembly());
            ServiceCollectionRegistrar.Register(IocManager);
        }
    }
}
