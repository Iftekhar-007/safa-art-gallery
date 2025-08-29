// import AddProductForm from "@/components/AddProductForm";

import AddProductForm from "../components/AddProductForm";

export default function AddProductPage() {
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      <AddProductForm />
    </div>
  );
}
