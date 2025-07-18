export const urls = {
  auth: {
    token: "/auth/token",
    login: "/auth/login",
    logout: "/auth/logout",
  },
  project: {
    list: "/projects",
    ById: (id: string) => `/projects/${id}`,
  },
};
