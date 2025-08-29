"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PortfolioSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchLatestProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        // latest 4 if API is not limiting
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchLatestProducts();
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={`/products/${product._id}`}>
                  <button className="bg-white text-black font-semibold px-4 py-2 rounded hover:bg-gray-200">
                    View Detail
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
