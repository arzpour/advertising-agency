import { cookies } from "next/headers";

export const getAccessToken = async () => {
  const cookie = await cookies();
  return (
    cookie.get(process.env.NEXT_PUBLIC_ACCSESS_TOKEN as string) ?? null
  );
};

export const getRefreshToken = async () => {
  const cookie = await cookies();
  return (
    cookie.get(process.env.NEXT_PUBLIC_REFRESH_TOKEN as string) ?? null
  );
};
