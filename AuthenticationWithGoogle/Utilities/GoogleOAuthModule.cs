using Microsoft.JSInterop;
using System.Runtime.InteropServices.JavaScript;
using System.Runtime.Versioning;

namespace AuthenticationWithGoogle.Utilities;

[SupportedOSPlatform("browser")]
public partial class GoogleOAuthModule
{
    [JSImport("globalThis.google.accounts.id.initialize")]
    public static partial void Initialize([JSMarshalAs<JSType.Any>] object aaaaa);

    [JSImport("globalThis.google.accounts.id.prompt")]
    public static partial void Prompt();
}
