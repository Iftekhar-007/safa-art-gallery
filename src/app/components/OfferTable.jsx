// import React from "react";

import { useSession } from "next-auth/react";

// const OfferTable = () => {
//   return <div>okay</div>;
// };

// export default OfferTable;

// src/components/OfferTable.jsx
export default function OfferTable({ offers }) {
  const { data: session } = useSession();
  return (
    <table className="w-full border-collapse border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2 text-black">Image</th>
          <th className="border p-2 text-black">Title</th>
          <th className="border p-2 text-black">Price</th>
          <th className="border p-2 text-black">Offered Price</th>
          <th className="border p-2 text-black">Email</th>
          <th className="border p-2 text-black">Date</th>
          {session?.user?.role === "admin" && (
            <th className="border p-2 text-black">Action</th>
          )}
        </tr>
      </thead>
      <tbody>
        {offers.map((offer) => (
          <tr key={offer._id}>
            <td className="border p-2">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-12 h-12 object-cover rounded"
              />
            </td>
            <td className="border p-2">{offer.title}</td>
            <td className="border p-2">${offer.price}</td>
            <td className="border p-2">${offer.offeredPrice}</td>
            <td className="border p-2">{offer.email}</td>
            <td className="border p-2">
              {new Date(offer.createdAt).toLocaleDateString()}
            </td>
            {session?.user?.role === "admin" && (
              <td className="border p-2">
                <button className="btn btn-success">Approve</button>
              </td>
            )}

            {/* <td>
              {session?.user?.role === "admin" && (
                <button className="btn text-white">Approve</button>
              )}
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
