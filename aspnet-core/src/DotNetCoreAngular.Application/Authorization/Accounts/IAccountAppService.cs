using System.Threading.Tasks;
using Abp.Application.Services;
using DotNetCoreAngular.Authorization.Accounts.Dto;

namespace DotNetCoreAngular.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
