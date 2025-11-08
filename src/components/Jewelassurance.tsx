import React from 'react';

const JewelAssurance: React.FC = () => {
  return (
    <div className="w-full bg-white py-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Text */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">
              <span className="text-black">Jewel </span>
              <span className="text-red-800">Assurance</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl font-light">
              Crafted by experts, cherished by you
            </p>
          </div>

          {/* Right Section - Features */}
          <div className="grid grid-cols-3 gap-8">
            {/* Quality Craftsmanship */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 64 64"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="12" y="28" width="12" height="24" fill="#C4945F" />
                  <rect x="28" y="16" width="12" height="36" fill="#C4945F" />
                  <rect x="44" y="24" width="12" height="28" fill="#C4945F" />
                  <circle cx="18" cy="24" r="4" fill="#C4945F" />
                  <circle cx="34" cy="12" r="4" fill="#C4945F" />
                  <circle cx="50" cy="20" r="4" fill="#C4945F" />
                </svg>
              </div>
              <h3 className="text-gray-800 font-medium text-sm mb-1">Quality</h3>
              <p className="text-gray-800 font-medium text-sm">Craftsmanship</p>
            </div>

            {/* Ethically Sourced */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 64 64"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 52C32 52 48 42 48 28C48 20 42 14 32 14C22 14 16 20 16 28C16 42 32 52 32 52Z"
                    fill="#C4945F"
                  />
                  <circle cx="32" cy="28" r="6" fill="white" />
                </svg>
              </div>
              <h3 className="text-gray-800 font-medium text-sm mb-1">Ethically</h3>
              <p className="text-gray-800 font-medium text-sm">Sourced</p>
            </div>

            {/* 100% Transparency */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <svg
                  viewBox="0 0 64 64"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32 12L20 24L26 32L20 40L32 52L44 40L38 32L44 24L32 12Z"
                    fill="#C4945F"
                  />
                </svg>
              </div>
              <h3 className="text-gray-800 font-medium text-sm mb-1">100%</h3>
              <p className="text-gray-800 font-medium text-sm">Transparency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelAssurance;