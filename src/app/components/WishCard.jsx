"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

const WishCard = ({ pro, userEmail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [offerAmount, setOfferAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const offerData = {
      id: pro._id,
      title: pro.title,
      price: pro.price,
      image: pro.image,
      email: userEmail,
      offeredPrice: parseFloat(offerAmount),
    };

    const res = await fetch("/api/offer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(offerData),
    });

    const offeringData = await res.json();
    if (offeringData.message === "product already added") {
      Swal.fire({
        title: "Product already added to offer list",
        icon: "warning",
        draggable: true,
      });

      setIsOpen(false);
      setOfferAmount("");
    } else if (res.ok) {
      Swal.fire({
        title: "Product Offer Successful",
        icon: "success",
        draggable: true,
      });
      setIsOpen(false);
      setOfferAmount("");
    } else {
      Swal.fire({
        title: "something went wrong",
        icon: "error",
        draggable: true,
      });
    }
  };
  return (
    <>
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
        {/* Image */}
        <div className="relative w-full h-56">
          <img
            src={pro.image}
            alt={pro.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-emerald-600 text-white text-sm px-3 py-1 rounded-full shadow">
            {pro.price} BDT
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {pro.title}
          </h2>

          <p className="text-sm text-gray-500 flex items-center justify-between">
            <span>Price: {pro.price}</span>
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
              {pro.status}
            </span>
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 rounded-xl transition-all"
          >
            Make an Offer
          </button>
        </div>
      </div>

      {/* modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Make an Offer
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm text-gray-600">Title</label>
                <input
                  value={pro.title}
                  readOnly
                  className="w-full border rounded-lg p-2 bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600">Price</label>
                <input
                  value={pro.price}
                  readOnly
                  className="w-full border rounded-lg p-2 bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm text-black">Your Offer</label>
                <input
                  type="number"
                  required
                  value={offerAmount}
                  onChange={(e) => setOfferAmount(e.target.value)}
                  placeholder="Enter your offer amount"
                  className="w-full border text-black rounded-lg p-2"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WishCard;
