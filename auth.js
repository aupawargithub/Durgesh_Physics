
let auth0 = null;

const config = {
  domain: "dev-7mt23fot8tx0n0ug.us.auth0.com",
  client_id: "GHGUu4PxLHtzcFotqc5NhfCuq4GOyeBh",
  redirect_uri: window.location.origin + "/Durgesh_Physics/home.html"
};

const configureClient = async () => {
  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.client_id,
    redirect_uri: config.redirect_uri
  });
};

const login = async () => {
  await auth0.loginWithRedirect();
};

window.onload = async () => {
  await configureClient();
  document.getElementById("loginBtn").addEventListener("click", login);
};
