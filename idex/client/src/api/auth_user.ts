import auth from "../utils/auth";

export const auth_user = async () => {
  const token = localStorage.getItem("validJWT");

  if (!token) {
    console.error("No token found.");
    return false;
  }

    return auth.loggedIn()
}