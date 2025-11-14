export const login = async (username, password) => {
  if (username === "admin" && password === "1234") {
    const fakeToken = btoa(JSON.stringify({
      user: username,
      exp: Date.now() + 1000 * 60 * 60, // 1 hour expiry
    }));
    localStorage.setItem("token", fakeToken);
    return fakeToken;
  }
  throw new Error("Invalid credentials");
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => localStorage.getItem("token");

export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;
  try {
    const data = JSON.parse(atob(token));
    return Date.now() < data.exp;
  } catch {
    return false;
  }
};
