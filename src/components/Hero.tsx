import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  image: string;
  alt: string;
}

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Replace these placeholder images with your actual banner images
  const slides: Slide[] = [
    {
      id: 1,
      image: '/images/i1.jpg', // Add your image path here
      alt: 'Banner 1'
    },
    {
      id: 2,
      image: '/images/jewell.jpg', // Add your image path here
      alt: 'Banner 2'
    },
    {
      id: 3,
      image: '/images/g2.jpg', // Add your image path here
      alt: 'Banner 3'
    },
    {
      id: 4,
      image: '/images/gold.jpg', // Add your image path here
      alt: 'Banner 4'
    }
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  const goToPrevious = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden bg-gray-200 item-center justify-center">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all z-10"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rotate-45 ${index === currentSlide
                ? 'w-3 h-3 bg-white scale-125'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroCarousel;