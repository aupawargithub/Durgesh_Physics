let auth0;

const config = {
  domain: "dev-7mt23fot8tx0n0ug.us.auth0.com",
  client_id: "GHGUu4PxLHtzcFotqc5NhfCuq4GOyeBh",
  redirect_uri: window.location.origin + "/Durgesh_Physics/home.html"
};

async function configureClient() {
  // createAuth0Client is available ONLY if SDK loaded first
  auth0 = await createAuth0Client(config);
}

async function login() {
  await auth0.loginWithRedirect();
}

window.onload = async () => {
  await configureClient();

  const btn = document.getElementById("loginBtn");
  if (!btn) return console.error("loginBtn not found");

  btn.addEventListener("click", login);
};
