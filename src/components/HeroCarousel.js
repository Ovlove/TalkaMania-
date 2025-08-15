import React, { useState, useEffect } from "react";

const slides = [
  { id: 1, title: "Fashion Trends 2025", image: "/src/assets/hero-placeholder.webp" },
  { id: 2, title: "Top Recipes This Week", image: "/src/assets/hero-placeholder.webp" },
  { id: 3, title: "Latest K-Drama Highlights", image: "/src/assets/hero-placeholder.webp" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded">
            {slide.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
