"use client";
import OfferTable from "@/app/components/OfferTable";
import useOffer from "@/hooks/useOffer";
import React from "react";

const AllOffer = () => {
  const { offers, loading } = useOffer();

  if (loading) {
    return (
      <div>
        <h2>Loading.......</h2>
      </div>
    );
  }
  return (
    <div className="p-6">
      <h2>All Offers Here</h2>
      {offers.length > 0 ? (
        <OfferTable offers={offers}></OfferTable>
      ) : (
        <p>No offers found</p>
      )}
    </div>
  );
};

export default AllOffer;
