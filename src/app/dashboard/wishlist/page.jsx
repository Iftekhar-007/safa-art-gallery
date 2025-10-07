// "use client";
// import WishCard from "@/app/components/WishCard";
// import React, { useEffect, useState } from "react";

// const MyWishlist = () => {
//   const [wishlist, setWishlist] = useState([]);
//   useEffect(() => {
//     fetch("/api/wishlist")
//       .then((res) => res.json())
//       .then((data) => {
//         setWishlist(data);
//       });
//   }, []);
//   return (
//     <div>
//       {wishlist.map((pro) => (
//         <WishCard key={pro.id} pro={pro}></WishCard>
//       ))}
//     </div>
//   );
// };

// export default MyWishlist;

"use client";
import WishCard from "@/app/components/WishCard";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const MyWishlist = () => {
  const { data: session } = useSession();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/wishlist?email=${session.user.email}`)
        .then((res) => res.json())
        .then((data) => setWishlist(data));
    }
  }, [session?.user?.email]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-200">
        My Wishlist ❤️
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlist.map((pro) => (
            <WishCard key={pro.id} pro={pro} userEmail={session?.user?.email} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyWishlist;
