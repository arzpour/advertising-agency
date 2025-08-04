const isBrowser = typeof window !== "undefined";

const ACCESS_TOKEN_KEY = process.env.NEXT_PUBLIC_ACCSESS_TOKEN;
const REFRESH_TOKEN_KEY = process.env.NEXT_PUBLIC_REFRESH_TOKEN;
const ROLE_KEY = process.env.NEXT_PUBLIC_LOGIN_ROLE;

// Access Token
export const getAccessToken = () => {
  if (!isBrowser) return null;
  if (!ACCESS_TOKEN_KEY) return null;
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setAccessToken = (token: string) => {
  if (!isBrowser) return null;
  if (!ACCESS_TOKEN_KEY) return null;

  return localStorage.setItem(ACCESS_TOKEN_KEY, token);
};

export const deleteAccessToken = () => {
  if (!isBrowser) return null;
  if (!ACCESS_TOKEN_KEY) return null;

  return localStorage.removeItem(ACCESS_TOKEN_KEY);
};

// Refresh Token
export const getRefreshToken = () => {
  if (!isBrowser) return null;
  if (!REFRESH_TOKEN_KEY) return null;

  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const setRefreshToken = (token: string) => {
  if (!isBrowser) return null;
  if (!REFRESH_TOKEN_KEY) return null;

  return localStorage.setItem(REFRESH_TOKEN_KEY, token);
};

export const deleteRefreshToken = () => {
  if (!isBrowser) return null;
  if (!REFRESH_TOKEN_KEY) return null;

  return localStorage.removeItem(REFRESH_TOKEN_KEY);
};

// User Role
export const setRole = (role: string) => {
  if (!isBrowser) return null;
  if (!ROLE_KEY) return null;

  return localStorage.setItem(ROLE_KEY, role);
};

export const getRole = () => {
  if (!isBrowser) return null;
  if (!ROLE_KEY) return null;

  return localStorage.getItem(ROLE_KEY);
};

export const deleteRole = () => {
  if (!isBrowser) return null;
  if (!ROLE_KEY) return null;

  return localStorage.removeItem(ROLE_KEY);
};
