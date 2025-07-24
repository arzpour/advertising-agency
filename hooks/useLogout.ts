import {
  deleteAccessToken,
  deleteRefreshToken,
  deleteRole,
} from "@/utils/session";
import React from "react";
import { logout } from "@/apis/client/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useLogout = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const router = useRouter();

  const logoutHandler = async () => {
    try {
      await logout();
      deleteAccessToken();
      deleteRefreshToken();
      deleteRole();
      toast.success("خارج شدید", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
      setIsOpen(false);
      router.push("/");
    } catch (error) {
      toast("مشکلی پیش آمده", {
        className: "!bg-red-100 !text-red-800 !shadow-md !h-[60px]",
      });
      console.log("🚀 ~ logoutHandler ~ error:", error);
    }
  };
  return { isOpen, logoutHandler, setIsOpen };
};

export default useLogout;
