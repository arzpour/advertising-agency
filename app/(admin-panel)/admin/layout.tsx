import Guard from "@/providers/guard";
import React from "react";

const AdminLayout: React.FC<IChildren> = ({ children }) => {
  return <Guard>{children}</Guard>;
};

export default AdminLayout;
