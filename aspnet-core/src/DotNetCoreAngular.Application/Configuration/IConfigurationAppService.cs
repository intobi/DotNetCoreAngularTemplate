using System.Threading.Tasks;
using DotNetCoreAngular.Configuration.Dto;

namespace DotNetCoreAngular.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
