const isBrowser = typeof window !== "undefined";

// Access Token
export const getAccessToken = () => {
  if (!isBrowser) return null;
  return localStorage.getItem(process.env.NEXT_PUBLIC_ACCSESS_TOKEN as string);
};

export const setAccessToken = (token: string) => {
  if (!isBrowser) return null;

  return localStorage.setItem(
    process.env.NEXT_PUBLIC_ACCSESS_TOKEN as string,
    token
  );
};

export const deleteAccessToken = () => {
  if (!isBrowser) return null;

  return localStorage.removeItem(
    process.env.NEXT_PUBLIC_ACCSESS_TOKEN as string
  );
};

// Refresh Token
export const getRefreshToken = () => {
  if (!isBrowser) return null;
  return localStorage.getItem(process.env.NEXT_PUBLIC_REFRESH_TOKEN as string);
};

export const setRefreshToken = (token: string) => {
  if (!isBrowser) return null;

  return localStorage.setItem(
    process.env.NEXT_PUBLIC_REFRESH_TOKEN as string,
    token
  );
};

export const deleteRefreshToken = () => {
  if (!isBrowser) return null;

  return localStorage.removeItem(
    process.env.NEXT_PUBLIC_REFRESH_TOKEN as string
  );
};

// User Role
export const setRole = (role: string) => {
  if (!isBrowser) return null;

  return localStorage.setItem(
    process.env.NEXT_PUBLIC_LOGIN_ROLE as string,
    role
  );
};

export const getRole = () => {
  if (!isBrowser) return null;
  return localStorage.getItem(process.env.NEXT_PUBLIC_LOGIN_ROLE as string);
};

export const deleteRole = () => {
  if (!isBrowser) return null;
  return localStorage.removeItem(process.env.NEXT_PUBLIC_LOGIN_ROLE as string);
};
