// import React from "react";

// const MyInsights = () => {
//   return <div></div>;
// };

// export default MyInsights;

// src/components/MyInsights.jsx
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "The Evolution of Modern Art",
    image:
      "https://img.freepik.com/free-photo/digital-art-style-illustration-mental-health-day-awareness_23-2151813241.jpg",
  },
  {
    id: 2,
    title: "Colors That Changed History",
    image:
      "https://img.freepik.com/free-photo/abstract-dadaism-concept_23-2151885803.jpg",
  },
  {
    id: 3,
    title: "Abstract Expressionism Explained",
    image:
      "https://static.vecteezy.com/system/resources/previews/030/592/126/non_2x/vibrant-painting-of-a-woman-with-a-face-full-of-bubbles-close-up-of-red-lips-yellow-balloon-eye-detail-with-colorful-makeup-and-blue-ball-on-a-yellow-background-generative-ai-photo.jpeg",
  },
];

export default function MyInsights() {
  return (
    <section className="pt-20 px-4 lg:px-0 lg:w-9/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">My Insights</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden"
          >
            <figure>
              <img
                src={post.image}
                alt={post.title}
                width={300}
                height={500}
                className="w-full h-[570px] object-cover"
              />
            </figure>
            <div className="card-body p-4">
              <h3 className="card-title text-lg">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
