let blazorSchoolAuthenticationStateProviderInstance = null;

function blazorSchoolGoogleInitialize(clientId, blazorSchoolAuthenticationStateProvider)
{
    // disable Exponential cool-down
    document.cookie = `g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    blazorSchoolAuthenticationStateProviderInstance = blazorSchoolAuthenticationStateProvider;
    google.accounts.id.initialize({ client_id: clientId, callback: blazorSchoolCallback });
}

function blazorSchoolCallback(googleResponse)
{
    blazorSchoolAuthenticationStateProviderInstance.invokeMethodAsync("GoogleLoginAsync", { ClientId: googleResponse.clientId, SelectedBy: googleResponse.select_by, Credential: googleResponse.credential });   
}