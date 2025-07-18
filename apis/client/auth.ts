import { urls } from "@/utils/urls";
import { axiosInstance } from "./instance";

type getTokenType = (refreshToken: string) => Promise<string>;
export const getToken: getTokenType = async (refreshToken) => {
  const response = await axiosInstance.post(urls.auth.token, {
    refreshToken,
  });
  return response.data.token.accessToken;
};

type loginType = (_: ILoginReqDto) => Promise<IAuthResDto>;
export const login: loginType = async (body) => {
  const response = await axiosInstance.post(urls.auth.login, body);
  return response.data;
};
