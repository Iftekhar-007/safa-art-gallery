"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("sign up succesful");
      setForm({ name: "", email: "", password: "" });
      // signIn("credentials", { email: form.email, password: form.password });
      // router.push("/");

      const loginRes = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
      });

      if (!loginRes.error) {
        router.push("/");
      } else {
        setMessage("user sign up but not routed to home");
      }
    } else {
      // const data = await res.json();
      setMessage("❌ " + data.error);
    }
  };

  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-sm mx-auto mt-10 p-4 border rounded">
        <h2 className="text-xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded">
            Signup
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 underline">
              Login here
            </Link>
          </p>
        </form>
        {message && <p className="mt-3">{message}</p>}
      </div>
    </div>
  );
}
