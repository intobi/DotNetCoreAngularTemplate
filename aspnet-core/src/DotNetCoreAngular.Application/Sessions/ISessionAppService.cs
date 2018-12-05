using System.Threading.Tasks;
using Abp.Application.Services;
using DotNetCoreAngular.Sessions.Dto;

namespace DotNetCoreAngular.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
