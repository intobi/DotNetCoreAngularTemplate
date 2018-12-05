using System.ComponentModel.DataAnnotations;

namespace DotNetCoreAngular.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}