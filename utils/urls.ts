export const urls = {
  auth: {
    token: "/auth/token",
    login: "/auth/login",
    logout: "/auth/logout",
  },
  project: {
    list: "/projects",
    ById: (id: string) => `/projects/${id}`,
    editOrder: "/projects/editOrder",
  },
  category: {
    list: "/categories",
    ById: (id: string) => `/categories/${id}`,
    editOrder: "/categories/editOrder",
  },
  service: {
    list: "/services",
    ById: (id: string) => `/services/${id}`,
    editOrder: "/services/editOrder",
  },
  blog: {
    list: "/blogs",
    ById: (id: string) => `/blogs/${id}`,
    editOrder: "/blogs/editOrder",
  },
  ticket: "/tickets",
};
