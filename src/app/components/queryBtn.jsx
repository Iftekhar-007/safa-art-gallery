"use client";

// import { time } from "framer-motion";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import Swal from "sweetalert2";

const QueryBtn = ({ product }) => {
  const { data: session } = useSession();
  const role = session?.user?.role;

  const handleAddWish = async () => {
    try {
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: product._id,
          title: product.title,
          sign: product.sign,
          time: new Date().toString(),
          image: product.image,
          price: product.price,
          email: session?.user?.email,
        }),
      });

      const dataPro = await res.json();
      // console.log(dataPro);
      if (dataPro.message === "already added") {
        Swal.fire({
          title: "Already added",
          icon: "warning",
          draggable: true,
        });
      } else if (dataPro.message === "added to wishlist successfully") {
        Swal.fire({
          title: "Added to wishlist",
          icon: "success",
          draggable: true,
        });
      } else {
        Swal.fire({
          title: "Oops something went wrong",
          icon: "warning",
          draggable: true,
        });
      }
    } catch (error) {
      // console.log(data.error);
      Swal.fire({
        title: "Network error!",
        text: "Please try again later.",
        icon: "error",
      });
    }
  };
  return (
    <div>
      {role === "user" ? (
        <button onClick={handleAddWish} className="btn">
          Add to wishlist
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default QueryBtn;
