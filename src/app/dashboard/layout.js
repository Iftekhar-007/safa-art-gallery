// import { useRouter } from "next/navigation";
import React from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-shrink-0">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1 px-5">{children}</div>
    </div>
  );
};

export default DashboardLayout;
