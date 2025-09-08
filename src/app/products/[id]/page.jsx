import dbConnect from "@/lib/dbconnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;

  const productsCollection = await dbConnect("products");
  const product = await productsCollection.findOne({ _id: new ObjectId(id) });

  return (
    <div className="py-20">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p className="text-lg text-gray-700 mb-2">{product.description}</p>
      <p className="text-sm text-gray-500">Sign: {product.sign}</p>
      <p className="text-sm text-gray-500">Date: {product.date}</p>
      <p className="text-sm text-gray-500">Time: {product.time}</p>
      <p className="text-sm text-gray-500">Price: {product.price}BDT</p>
    </div>
  );
};

export default page;
