// "use client";

// import { usePathname } from "next/navigation";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useEffect, useState } from "react";

// export default function ClientLayoutWrapper({ children }) {
//   const pathname = usePathname();

//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true); // ensures client-side render
//   }, []);

//   if (!mounted) return null;

//   const isDashboard = pathname.startsWith("/dashboard");

//   if (isDashboard) {
//     return <>{children}</>;
//   }

//   return (
//     <>
//       <Navbar />
//       {children}
//       <Footer />
//     </>
//   );
// }

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ensures client-side render
  }, []);

  if (!mounted) return null;

  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
