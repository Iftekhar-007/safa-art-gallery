"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    heading: "Discover Modern Art",
    paragraph:
      "Explore the world of creativity with modern art pieces that redefine tradition. Our collection is full of colors, patterns, and stories that inspire a new perspective.",
    img: "https://images7.alphacoders.com/709/thumb-1920-709445.jpg",
    textAnim: { x: [-200, 0], opacity: [0, 1] },
    imgAnim: { x: 200, opacity: 0 },
  },
  {
    heading: "Bold and Creative",
    paragraph:
      "Experience bold strokes and creative masterpieces that push the boundaries of imagination. This gallery is for those who dream beyond the ordinary.",
    img: "https://wallpapers.com/images/featured/rose-art-hb4gikhm1jmgqm55.jpg",
    textAnim: { y: [200, 0], opacity: [0, 1] },
    imgAnim: { y: -200, opacity: 0 },
  },
  {
    heading: "Classic Meets Contemporary",
    paragraph:
      "Immerse yourself in a blend of classic techniques and contemporary flair. Our curation is perfect for art lovers who cherish the old and embrace the new.",
    img: "/vine.webp",
    textAnim: { x: [200, 0], opacity: [0, 1] },
    imgAnim: { x: -200, opacity: 0 },
  },
  {
    heading: "Art That Speaks",
    paragraph:
      "Each piece tells a story, connecting with emotions and sparking conversations. Art that speaks louder than words and resonates with every viewer.",
    img: "https://images.unsplash.com/photo-1678183542850-6debcc6953d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHZpbmUlMjB0ZXh0dXJlfGVufDB8fDB8fHww",
    textAnim: { y: [-200, 0], opacity: [0, 1] },
    imgAnim: { y: 200, opacity: 0 },
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full min-h-screen md:h-[600px] overflow-hidden">
      {/* Background image container */}
      <div className="absolute inset-0">
        <motion.img
          key={current}
          src={slide.img}
          alt="Slide Image"
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={slide.imgAnim} // direction from slide.imgAnim
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl font-sans text-shadow-base-300 mx-auto px-4 py-8 md:py-16 h-full flex flex-col justify-center text-white">
        <motion.div
          key={current + "-text"}
          className="max-w-2xl"
          initial={slide.textAnim} // text animation from slides array
          animate={{ x: 0, y: 50, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {slide.heading}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed drop-shadow-md">
            {slide.paragraph}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
