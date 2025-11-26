import React, { useState } from 'react';
import { Heart, ChevronDown } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  colors?: string[];
  badge?: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-[200px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative bg-gray-50 h-32 sm:h-36 overflow-hidden">
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-1.5 right-1.5 bg-white rounded-full p-1 hover:bg-gray-50 transition-colors shadow-sm z-10"
        >
          <Heart
            size={12}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}
          />
        </button>
        
        {/* Default Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover cursor-pointer absolute inset-0 transition-transform duration-500 ease-in-out ${
            isHovered ? '-translate-x-full' : 'translate-x-0'
          }`}
        />
        
        {/* Hover Image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            className={`w-full h-full object-cover cursor-pointer absolute inset-0 transition-transform duration-500 ease-in-out ${
              isHovered ? 'translate-x-0' : 'translate-x-full'
            }`}
          />
        )}
      </div>

      {/* Product Title and Price */}
      <div className="p-2 text-center border-b border-gray-100">
        <h3 className="text-gray-800 font-medium text-sm mb-1 line-clamp-2">{product.name}</h3>
        <p className="text-xs">
          <span className="text-amber-800 font-medium">₹</span>
          <span className="text-gray-900 font-semibold">{product.price.toLocaleString('en-IN')}</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="p-2 flex flex-col gap-1">
        <button className="text-amber-800 font-medium text-xs py-1 px-2 border border-amber-800 rounded hover:bg-amber-50 transition-colors">
          Buy Now
        </button>
        <button className="text-gray-700 font-medium text-xs py-1 px-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
          Details
        </button>
      </div>

      {/* Color Options */}
      {product.colors && (
        <div className="px-2 pb-2 flex gap-1 justify-center">
          {product.colors.map((color, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full border ${
                idx === 0 ? 'border-gray-800' : 'border-gray-300'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FilterSection: React.FC = () => {

  return (
    <div className="w-full lg:w-80 bg-white p-4 lg:p-6 border-b lg:border-r lg:border-b-0 border-gray-200 lg:h-screen overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-gray-800 font-semibold flex items-center gap-2">
          FILTERS <span className="bg-gray-200 text-xs px-2 py-0.5 rounded">2</span>
        </h2>
        <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
          CLEAR ALL
        </button>
      </div>

      {/* Price Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h3 className="text-gray-800 font-semibold mb-4">Price</h3>
        <div className="space-y-3">
          {[
            { label: '₹10,001 - ₹15,000', count: 194 },
            { label: '₹20,001 - ₹30,000', count: 303 },
            { label: 'Under ₹5,000', count: 11 },
            { label: '₹5,001 - ₹10,000', count: 256 },
          ].map((option, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                {option.label} <span className="text-gray-400">({option.count})</span>
              </span>
            </label>
          ))}
        </div>
        <button className="flex items-center gap-1 text-purple-600 text-sm font-medium mt-3 hover:text-purple-700">
          <ChevronDown size={16} />
          10 More
        </button>
      </div>

      {/* Discounts Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h3 className="text-gray-800 font-semibold mb-4">Discounts</h3>
        <div className="space-y-3">
          {[
            { label: 'Up to 15% off on Diamond Prices', count: 1 },
            { label: 'Flat 50% off on Making Charges', count: 1290 },
            { label: 'Flat 10% off on Making Charges', count: 536 },
            { label: 'Flat 5% off on Making Charges', count: 8 },
          ].map((option, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                {option.label} <span className="text-gray-400">({option.count})</span>
              </span>
            </label>
          ))}
        </div>
        <button className="flex items-center gap-1 text-purple-600 text-sm font-medium mt-3 hover:text-purple-700">
          <ChevronDown size={16} />
          4 More
        </button>
      </div>

      {/* Product Type Filter */}
      <div className="mb-6">
        <h3 className="text-gray-800 font-semibold mb-4">Product Type</h3>
        <div className="space-y-3">
          {[
            { label: 'Earrings', count: 2731 },
            { label: 'Rings', count: 2175 },
          ].map((option, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-700 group-hover:text-gray-900">
                {option.label} <span className="text-gray-400">({option.count})</span>
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

const JewelryProductPage: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Emerald Shine CZ Choker Set',
      price: 4369,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Susan Kundan Choker Set',
      price: 5959,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Orchid Nakshatra CZ Necklace',
      price: 6779,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Anusri Antique Choker Set',
      price: 6469,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=400&fit=crop',
      colors: ['#22c55e', '#ef4444'],
    },
    {
      id: 5,
      name: 'Pearl Elegance Necklace Set',
      price: 5299,
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop',
    },
    {
      id: 6,
      name: 'Golden Heritage Choker Set',
      price: 7899,
      image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
    },
    {
      id: 7,
      name: 'Ruby Radiance Necklace Set',
      price: 8499,
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
    },
    {
      id: 8,
      name: 'Diamond Dazzle Choker Set',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=400&fit=crop',
      hoverImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row">
        <FilterSection />
        
        <div className="flex-1 p-3 sm:p-4 lg:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-4 lg:mb-6 text-center lg:text-left">
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">Choker Necklace Sets</h1>
              <p className="text-gray-600 text-sm lg:text-base">Showing {products.length} products</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 justify-items-center">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryProductPage;