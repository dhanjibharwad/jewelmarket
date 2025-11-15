import { useState, useEffect } from 'react';

const Imageslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=700&fit=crop',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=700&fit=crop',
    'https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=600&h=700&fit=crop',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=700&fit=crop',
    'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=700&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getImageStyle = (index: number) => {
    const position = (index - currentIndex + images.length) % images.length;
    
    if (position === 0) {
      return {
        transform: 'translateY(0) translateX(0) scale(1)',
        zIndex: 30,
        opacity: 1
      };
    } else if (position === 1) {
      return {
        transform: 'translateY(80px) translateX(20px) scale(0.85)',
        zIndex: 20,
        opacity: 0.7
      };
    } else if (position === 2) {
      return {
        transform: 'translateY(160px) translateX(40px) scale(0.7)',
        zIndex: 10,
        opacity: 0.5
      };
    } else {
      return {
        transform: 'translateY(0) translateX(-200%) scale(0.6)',
        zIndex: 0,
        opacity: 0
      };
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-0">
      {/* Left Side - Image Slider */}
      {/* <div className="relative p-12 flex items-center justify-centre overflow-hidden min-h-[600px]"> */}
      <div className="relative p-12 flex items-center justify-center overflow-hidden min-h-[600px]">

        <div className="relative w-full max-w-lg h-[550px] ml-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Jewelry ${index + 1}`}
              className="absolute top-0 left-0 w-[800px] h-[400px] object-cover rounded-3xl transition-all duration-700 ease-in-out"
              style={getImageStyle(index)}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="p-12 lg:p-20 flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Need help in choosing the best Jewellery?
        </h1>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Joyalukkas is a premium shopping destination for gold and diamond jewellery dedicated to embellishing your everyday moments and milestones with elegance.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#C41E3A] hover:bg-[#A01829] text-white font-semibold px-8 py-3 rounded-md transition-colors duration-300">
            Store Locator
          </button>
          
          <button className="bg-white hover:bg-gray-50 text-[#C41E3A] font-semibold px-8 py-3 rounded-md border-2 border-[#C41E3A] transition-colors duration-300">
            Request Call Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Imageslider;