// Access Token
export const getAccessToken = () => {
  return localStorage.getItem(process.env.NEXT_PUBLIC_ACCSESS_TOKEN as string);
};

export const setAccessToken = (token: string) => {
  return localStorage.setItem(
    process.env.NEXT_PUBLIC_ACCSESS_TOKEN as string,
    token
  );
};

export const deleteAccessToken = () => {
  return localStorage.removeItem(
    process.env.NEXT_PUBLIC_ACCSESS_TOKEN as string
  );
};

// Refresh Token
export const getRefreshToken = () => {
  return localStorage.getItem(process.env.NEXT_PUBLIC_REFRESH_TOKEN as string);
};

export const setRefreshToken = (token: string) => {
  return localStorage.setItem(
    process.env.NEXT_PUBLIC_REFRESH_TOKEN as string,
    token
  );
};

export const deleteRefreshToken = () => {
  return localStorage.removeItem(
    process.env.NEXT_PUBLIC_REFRESH_TOKEN as string
  );
};

// User Role
export const setRole = (role: string) => {
  return localStorage.setItem(
    process.env.NEXT_PUBLIC_LOGIN_ROLE as string,
    role
  );
};

export const getRole = () => {
  return localStorage.getItem(process.env.NEXT_PUBLIC_LOGIN_ROLE as string);
};

export const deleteRole = () => {
  return localStorage.removeItem(process.env.NEXT_PUBLIC_LOGIN_ROLE as string);
};
