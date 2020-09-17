import decode from "jwt-decode";

export default function getJwtToken() {
  return localStorage.getItem("jwt-token");
}
export const isTokenExpired = (token) => {
  try {
    const decoded = decode(token);
    console.log(decoded.exp, Date.now() / 1000);
    if (decoded.exp < Date.now() / 1000) {
      return true;
    } else return false;
  } catch (err) {
    return false;
  }
};
