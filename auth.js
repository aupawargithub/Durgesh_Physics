let auth0;

const config = {
  domain: "dev-7mt23fot8tx0n0ug.us.auth0.com",
  client_id: "GHGUu4PxLHtzcFotqc5NhfCuq4GOyeBh",
  redirect_uri: window.location.origin + "/Durgesh_Physics/home.html"
};

async function configureClient() {
  // ✅ This will only work if the Auth0 SDK loaded BEFORE this script
  auth0 = await createAuth0Client(config);
}

async function login() {
  await auth0.loginWithRedirect();
}

window.onload = async () => {
  await configureClient();
  document.getElementById("loginBtn")?.addEventListener("click", login);
};
