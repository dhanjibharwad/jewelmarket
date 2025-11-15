// src/components/JewelryPopup.tsx
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface JewelryPopupProps {
  autoShow?: boolean;
  delay?: number;
}

const PopupDemo = ({ 
  autoShow = true, 
  delay = 1000 
}: JewelryPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (autoShow) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [autoShow, delay]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-[fadeIn_0.3s_ease-out]"
      onClick={handleClose}
    >
      <div 
        className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden animate-[slideIn_0.3s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-rose-600 hover:bg-rose-700 text-white rounded-lg p-2 transition-all duration-200 hover:scale-110 shadow-lg group"
          aria-label="Close popup"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform duration-200" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Section - Model Image */}
          <div className="relative bg-gradient-to-br from-rose-100/50 to-pink-100/50 p-8 flex items-center justify-center min-h-[400px]">
            <div className="relative">
              {/* Decorative background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
              
              {/* Placeholder for model image - Replace with your actual image */}
              <img src="/images/just.jpg" alt="Website Logo" />
              {/* <div className="relative w-64 h-80 bg-gradient-to-br from-rose-200/40 to-pink-200/40 rounded-3xl flex items-center justify-center shadow-xl">
                <div className="text-center p-6">
                  <div className="w-32 h-32 mx-auto bg-white/60 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-5xl">💎</span>
                  </div>
                  <p className="text-rose-700 font-semibold text-lg">Elegant Jewelry</p>
                  <p className="text-rose-600 text-sm mt-2">Collection 2024</p>
                </div>
              </div> */}

              {/* Decorative sparkles */}
              <div className="absolute -top-4 -right-4 text-yellow-400 text-2xl animate-pulse">✨</div>
              <div className="absolute -bottom-4 -left-4 text-yellow-400 text-xl animate-pulse delay-300">✨</div>
            </div>
          </div>

          {/* Right Section - Offer Details */}
          <div className="p-8 flex flex-col justify-center bg-white/50">
            {/* Brand Header */}
            <div className="text-center mb-6">
              <p className="text-rose-600 font-semibold text-sm tracking-widest mb-1 uppercase">JEWEL MARKET</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-1 tracking-tight">EASY GOLD</h2>
              <p className="text-gray-600 text-sm tracking-wide uppercase">Purchase Scheme</p>
              <div className="w-16 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Discount Offers */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 bg-white rounded-xl p-4 shadow-lg border-2 border-rose-100 hover:border-rose-300 transition-all duration-200 hover:shadow-xl">
                <p className="text-rose-600 text-xs font-semibold mb-1 uppercase tracking-wide">Get Upto</p>
                <p className="text-4xl font-bold text-rose-600 mb-1 leading-none">
                  18<span className="text-xl align-top">%</span>
                  <span className="text-sm font-semibold ml-1">OFF</span>
                </p>
                <p className="text-gray-600 text-xs leading-tight mt-2">
                  Gold & Silver making<br/>Charge
                </p>
              </div>

              <div className="flex items-center justify-center">
                <span className="text-3xl text-rose-500 font-bold">+</span>
              </div>

              <div className="flex-1 bg-white rounded-xl p-4 shadow-lg border-2 border-rose-100 hover:border-rose-300 transition-all duration-200 hover:shadow-xl">
                <p className="text-rose-600 text-xs font-semibold mb-1 uppercase tracking-wide">Get Upto</p>
                <p className="text-4xl font-bold text-rose-600 mb-1 leading-none">
                  50<span className="text-xl align-top">%</span>
                  <span className="text-sm font-semibold ml-1">OFF</span>
                </p>
                <p className="text-gray-600 text-xs leading-tight mt-2">
                  Diamond making<br/>Charge
                </p>
              </div>
            </div>

            {/* Installment Badge */}
            <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 rounded-2xl p-5 text-white text-center shadow-xl mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
              <div className="relative z-10">
                <p className="text-3xl font-bold mb-1">
                  10 <span className="text-sm font-medium uppercase tracking-wide">Monthly</span>
                </p>
                <p className="text-xs font-semibold mb-2 uppercase tracking-wider">Installment</p>
                <p className="text-xs opacity-90 mb-1">Starting from</p>
                <p className="text-4xl font-bold tracking-tight">₹1000</p>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleClose}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3.5 px-8 rounded-full transition-all duration-200 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 mb-2 group"
            >
              EXPLORE NOW
              <span className="text-lg group-hover:translate-x-1 transition-transform duration-200"></span>
            </button>

            <p className="text-center text-xs text-gray-500 italic">*T&C apply</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PopupDemo;