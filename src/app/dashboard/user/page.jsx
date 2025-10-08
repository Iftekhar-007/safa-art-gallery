"use client";
import OfferTable from "@/app/components/OfferTable";
import useOffer from "@/hooks/useOffer";
import React from "react";

const UserOffer = () => {
  const { offers, loading } = useOffer();

  if (loading) {
    return (
      <div>
        <p>Loading.......</p>
      </div>
    );
  }
  return (
    <div className="p-6">
      <h1>My OfferList</h1>
      {offers.length > 0 ? (
        <OfferTable offers={offers}></OfferTable>
      ) : (
        <p>You have No Offer yet</p>
      )}
    </div>
  );
};

export default UserOffer;
