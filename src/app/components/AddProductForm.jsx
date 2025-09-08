"use client";
import { useState } from "react";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    sign: "",
    time: "",
    date: "",
    image: "",
    price: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Product added successfully!");
        setFormData({
          title: "",
          description: "",
          sign: "",
          time: "",
          date: "",
          image: "",
          price: "",
        });
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong!");
    }
  };

  return (
    <div
      style={{ maxWidth: "500px", margin: "0 auto" }}
      className="min-h-screen"
    >
      <h2 className="text-xl font-bold mb-4">Add Product</h2>
      {message && <p className="mb-3">{message}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="sign"
          placeholder="Sign"
          value={formData.sign}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
