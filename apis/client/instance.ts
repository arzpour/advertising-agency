import { getAccessToken, getRefreshToken } from "@/utils/session";
import axios from "axios";
import { getToken } from "./auth";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => console.log(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const req = error.config;

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !req._retry
    ) {
      req._retry = true;

      if (
        req.url !== "/auth/login" &&
        req.url !== "/auth/logout" &&
        req.url !== "/auth/signup"
      ) {
        try {
          const refreshToken = getRefreshToken();

          if (!refreshToken) throw new Error("No refresh token");

          const newAccessToken = await getToken(refreshToken);

          req.headers["Authorization"] = `Bearer ${newAccessToken}`;

          return axiosInstance(req);
        } catch (err) {
          console.error("Token refresh failed:", err);
        }
      }
    }

    return Promise.reject(error);
  }
);
