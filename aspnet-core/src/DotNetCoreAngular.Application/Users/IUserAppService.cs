using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using DotNetCoreAngular.Roles.Dto;
using DotNetCoreAngular.Users.Dto;

namespace DotNetCoreAngular.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();

        Task ChangeLanguage(ChangeUserLanguageDto input);
    }
}
