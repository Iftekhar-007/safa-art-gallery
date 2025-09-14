// import { fetchData } from "next-auth/client/_utils";
"use client";
import Link from "next/link";
// import { fetchData } from "next-auth/client/_utils";
import React, { useEffect, useState } from "react";

const addedproducts = () => {
  const [added, setAdded] = useState([]);
  console.log(added);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setAdded(data));
  }, []);
  return (
    <div className="p-20">
      <h2 className="text-center">My Added Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {added.map((add) => (
          <div key={add._id}>
            <div className="card bg-base-100 shadow-sm">
              <figure>
                <img
                  src={add.image}
                  alt={add.title}
                  className="h-[320px] w-full"
                />
              </figure>
              <div className="card-body">
                <div className="badge badge-secondary">{add.available}</div>
                <h2 className="card-title">{add.title}</h2>
                <p>{add.description}</p>
                <p>{add.sign}</p>
                <p>{add.price}</p>
                <div className="card-actions justify-end">
                  <Link href={`/products/${add._id}`} className="btn">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default addedproducts;
