using Abp.Application.Services;
using Abp.Application.Services.Dto;
using DotNetCoreAngular.MultiTenancy.Dto;

namespace DotNetCoreAngular.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}
