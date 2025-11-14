import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  product: string;
  image: string;
}

const TestimonialSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "The Item I was bought from PCJ is New design and latest trends It's really very nice...",
      name: "Yogadityan",
      product: "The Daibloid Diamond Ring",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      text: "This is my first online gold and diamond shopping and i m very happy with this product...",
      name: "Neetu Thakur",
      product: "Diamond Ring",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      text: "Dear Concerned, I was totally amazed by the purity of PC Jeweller before delivery of...",
      name: "Sandeep Babuta",
      product: "Diamond Ring",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      id: 4,
      text: "Amazing quality and excellent service. Highly recommended for everyone looking for premium jewelry...",
      name: "Priya Sharma",
      product: "Gold Necklace",
      image: "https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg"
    },
    {
      id: 5,
      text: "The craftsmanship is outstanding. I received my order on time and the product exceeded my expectations...",
      name: "Rajesh Kumar",
      product: "Platinum Ring",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      id: 6,
      text: "Best online jewelry shopping experience. The designs are elegant and the quality is top-notch...",
      name: "Anjali Patel",
      product: "Diamond Earrings",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    }
  ];

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset position for infinite loop
        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-800 mb-2">
            Testimonial
          </h1>
          <p className="text-base text-slate-500 font-light">
            What our customers say
          </p>
        </header>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors -ml-4 md:-ml-12"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            className="overflow-hidden px-8 md:px-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {duplicatedTestimonials.map((testimonial, idx) => (
                <div
                  key={`${testimonial.id}-${idx}`}
                  className="p-6 relative flex-shrink-0 w-80"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 left-6 text-gray-300 text-6xl leading-none font-serif">
                    "
                  </div>

                  {/* Testimonial Text */}
                  <div className="pt-8 pb-6">
                    <p className="text-gray-600 italic text-sm leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Product Image Placeholder */}
                  <div className="flex justify-center mb-4">
                    
                      {/* <div className="w-16 h-16 bg-gray-200 rounded"></div> */}
                      <img src={testimonial.image} alt="Product" className="w-16 h-16 rounded-lg" />
                    
                  </div>

                  {/* Customer Info */}
                  <div className="text-center">
                    <h4 className="font-bold text-gray-800 text-base mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.product}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors -mr-4 md:-mr-12"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;