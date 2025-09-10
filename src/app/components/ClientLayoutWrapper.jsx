"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) {
    return <>{children}</>; // dashboard হলে শুধু content render
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
