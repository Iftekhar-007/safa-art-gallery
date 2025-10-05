"use client";
import { useSession } from "next-auth/react";
import React from "react";

const QueryBtn = () => {
  const { data: session } = useSession();
  const role = session?.user?.role;
  return (
    <div>
      {role === "user" ? <button className="btn">Add to wishlist</button> : ""}
    </div>
  );
};

export default QueryBtn;
