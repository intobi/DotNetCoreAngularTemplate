using Abp.AutoMapper;
using DotNetCoreAngular.Authentication.External;

namespace DotNetCoreAngular.Models.TokenAuth
{
    [AutoMapFrom(typeof(ExternalLoginProviderInfo))]
    public class ExternalLoginProviderInfoModel
    {
        public string Name { get; set; }

        public string ClientId { get; set; }
    }
}
