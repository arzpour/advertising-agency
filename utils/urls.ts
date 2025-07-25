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
  category: {
    list: "/categories",
    ById: (id: string) => `/categories/${id}`,
  },
  blog: {
    list: "/blogs",
    ById: (id: string) => `/blogs/${id}`,
  },
  ticket: "/tickets",
};
