using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace DotNetCoreAngular.Localization
{
    public static class DotNetCoreAngularLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(DotNetCoreAngularConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(DotNetCoreAngularLocalizationConfigurer).GetAssembly(),
                        "DotNetCoreAngular.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}
