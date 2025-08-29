"use client";

export default function ProductCard({ product }) {
  const shortDescription =
    product.description.split(" ").slice(0, 6).join(" ") +
    (product.description.split(" ").length > 6 ? "..." : "");

  return (
    <div className="border rounded-xl shadow-md overflow-hidden bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-black mb-2">{product.title}</h3>
        <p className="text-black mb-3">{shortDescription}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View More
        </button>
      </div>
    </div>
  );
}
