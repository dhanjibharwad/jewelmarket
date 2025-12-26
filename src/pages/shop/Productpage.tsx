import React, { useState } from 'react';
import { Heart, ChevronDown, Search } from 'lucide-react';

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
    <div className="group relative flex flex-col w-full">
      {/* Main Image Container */}
      <div 
        className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-50 transition-colors shadow-sm z-10"
        >
          <Heart
            size={16}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}
          />
        </button>
        
        {/* Default Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`h-full w-full object-cover transition-all duration-500 ${
            isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
          }`}
        />
        
        {/* Hover Image */}
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} alternate view`}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
              isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
            }`}
          />
        )}
      </div>

      {/* Product Info Container */}
      <div className="mt-3 flex items-center gap-2 px-1">
        {/* Thumbnail */}
        <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow group-hover:shadow-md">
          <img
            src={product.image}
            alt={`${product.name} thumbnail`}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Title and Price */}
        <div className="flex flex-1 flex-col gap-1">
          <h3 className="text-sm font-semibold leading-tight text-gray-900 line-clamp-2 transition-colors group-hover:text-gray-700">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-gray-900">
            ₹{product.price.toLocaleString('en-IN')}
          </p>
        </div>

        {/* Buy Now Button */}
        <button
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-800 text-white shadow-lg transition-all hover:scale-105 hover:bg-black hover:shadow-xl active:scale-95"
          aria-label="Buy Now"
        >
          <Search className="h-4.5 w-4.5" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};

const FilterSection: React.FC = () => {

  return (
    <div className="w-full lg:w-80 bg-white p-4 lg:p-6 border-b lg:border-r lg:border-b-0 border-gray-200 lg:sticky lg:top-0 lg:h-screen overflow-y-auto">
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
          <div className="w-full">
            <div className="mb-4 lg:mb-6 text-center lg:text-left">
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">Choker Necklace Sets</h1>
              <p className="text-gray-600 text-sm lg:text-base">Showing {products.length} products</p>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
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