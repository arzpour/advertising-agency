"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";

const AdminInfoCard = () => {
  const { adminInfo } = useAppSelector((state) => state.admin);

  return (
    <div className="flex gap-4 items-center">
      <div className="">
        <h4>{adminInfo.name ?? "موجود نیست"}</h4>
        <span className="text-gray-700">{adminInfo.email ?? "موجود نیست"}</span>
      </div>
      <Image
        src={"/premium_photo-1684711741208-315dcfa993b9.avif"}
        alt="admin image"
        width={200}
        height={200}
        className="w-14 h-14 rounded-full"
      />
    </div>
  );
};

export default AdminInfoCard;
