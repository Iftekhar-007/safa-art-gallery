import QueryBtn from "@/app/components/queryBtn";
import dbConnect from "@/lib/dbconnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

const productDetail = async ({ params }) => {
  const { id } = params;

  const productsCollection = await dbConnect("products");
  const product = await productsCollection.findOne({ _id: new ObjectId(id) });

  return (
    <div className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-400">
            {product.title}
          </h2>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-4 py-6 border-y border-gray-200">
            <p className="text-sm md:text-base text-gray-400 flex items-center gap-3">
              <span className="font-semibold text-gray-400 min-w-[80px]">
                Sign:
              </span>
              <span>{product.sign}</span>
            </p>
            <p className="text-sm md:text-base text-gray-400 flex items-center gap-3">
              <span className="font-semibold text-gray-400 min-w-[80px]">
                Date:
              </span>
              <span>{product.date}</span>
            </p>
            <p className="text-sm md:text-base text-gray-400 flex items-center gap-3">
              <span className="font-semibold text-gray-400 min-w-[80px]">
                Time:
              </span>
              <span>{product.time}</span>
            </p>
          </div>

          <div className="pt-4">
            <p className="text-3xl md:text-4xl font-bold text-emerald-600 mb-6">
              {product.price} BDT
            </p>

            <QueryBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetail;
