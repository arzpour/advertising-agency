"use client";

import { getAccessToken, getRole } from "@/utils/session";
import { notFound } from "next/navigation";
import React from "react";

const Guard: React.FC<IChildren> = ({ children }) => {
  const role = getRole();
  const token = getAccessToken();

  if (role !== "ADMIN" || !token) {
    return notFound();
  }

  return <>{children}</>;
};

export default Guard;
