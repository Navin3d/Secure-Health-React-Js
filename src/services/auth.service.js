export const getUserId = _ => localStorage.getItem("UserId");

export const isLoggedIn = _ => localStorage.getItem("UserId") ? true : false;

export const logout = _ => {
    localStorage.removeItem("UserId");
}