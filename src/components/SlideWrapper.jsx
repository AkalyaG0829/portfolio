import { useState, useEffect, useRef } from "react";

export default function SlideWrapper({ children }) {
  const [index, setIndex] = useState(0);
  const isScrolling = useRef(false);

  const slides = children;

  const nextSlide = () => {
    if (index < slides.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      isScrolling.current = true;

      if (e.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    window.addEventListener("wheel", handleWheel);

    return () => window.removeEventListener("wheel", handleWheel);
  }, [index]);

  return (
    <div className="h-screen w-screen overflow-hidden relative">

      {/* Slides Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        {slides}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 text-3xl opacity-60 hover:opacity-100"
      >
        ⬅
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 text-3xl opacity-60 hover:opacity-100"
      >
        ➡
      </button>

      {/* Side Dots */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === i ? "bg-white scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>

    </div>
  );
}