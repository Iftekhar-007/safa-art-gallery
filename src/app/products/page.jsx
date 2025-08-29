// import ProductsList from "@/components/ProductsList";

import ProductsList from "../components/ProductsList";

export default function ProductsPage() {
  return (
    <div className="p-20 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Products</h1>
      <ProductsList />
    </div>
  );
}
