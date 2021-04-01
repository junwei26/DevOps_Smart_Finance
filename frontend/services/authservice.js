export function authHeader() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return currentUser && currentUser.isLoggedIn ? { authorization: currentUser.token } : {};
}
