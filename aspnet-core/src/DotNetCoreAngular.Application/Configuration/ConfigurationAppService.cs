using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using DotNetCoreAngular.Configuration.Dto;

namespace DotNetCoreAngular.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : DotNetCoreAngularAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
