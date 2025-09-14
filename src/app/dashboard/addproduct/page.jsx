"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AddProductForm from "../../components/AddProductForm";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="text-center mt-10">Checking authentication...</p>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center mt-10">
        <p className="mb-4">You need to log in to access this page.</p>
        <button
          onClick={() => signIn()}
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-10 min-h-screen">
      {/* <h1 className="text-2xl font-bold mb-4">Add Product</h1> */}
      <AddProductForm></AddProductForm>
    </div>
  );
}
