import React from 'react';

// Define the structure for a category item
interface Category {
  name: string;
  imageUrl: string;
}

// Data structure mimicking the categories in the image
// NOTE: Please replace these placeholder image URLs with your actual image paths.
const categories: Category[] = [
  { name: 'EARRINGS', imageUrl: '/images/jewell.jpg' },
  { name: 'FINGER RINGS', imageUrl: 'https://placehold.co/400x400/e0d0c0/333333?text=RINGS' },
  { name: 'PENDANTS', imageUrl: 'https://placehold.co/400x400/d0d0f0/333333?text=PENDANTS' },
  { name: 'MANGALSUTRA', imageUrl: '/images/gold.jpg' },
  // Assuming the next row has Bracelets, Bangles, and Chains
  { name: 'BRACELETS', imageUrl: 'https://placehold.co/400x400/c0e0c0/333333?text=BRACELETS' },
  { name: 'BANGLES', imageUrl: 'https://placehold.co/400x400/b0b0a0/333333?text=BANGLES' },
  { name: 'CHAINS', imageUrl: 'https://placehold.co/400x400/f0e0d0/333333?text=CHAINS' },
  // The last spot is the special '10+' card
];

// Helper component for a single category card
const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <a 
      href={`/shop/${category.name.toLowerCase().replace(' ', '-')}`}
      // 'rounded-md' applies the radius to the entire card container
      className="block bg-white overflow-hidden rounded-md transition-opacity duration-300 hover:opacity-90"
    >
      {/* Added rounded-t-md here so the image respects the top corners of the parent 'a' tag */}
      <div className="aspect-square w-full rounded-t-md overflow-hidden">
        {/* Image placeholder */}
        <img 
          src={category.imageUrl} 
          alt={category.name} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src="https://placehold.co/400x400/f0f0f0/333333?text=Image+Missing";
          }}
        />
      </div>
      {/* Title is centered and styled as per the image */}
      <div className="py-4 text-center">
        <p className="text-black font-medium text-sm tracking-widest">{category.name}</p>
      </div>
    </a>
  );
};

const CategoryGrid: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 font-['Inter']">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          {/* Header using amber-800 for the color and a serif font for style matching */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-black mb-1" 
            style={{ color: '#92400E' }} // Exact hex code for amber-800
          >
            Find Your Perfect Match
          </h2>
          <p className="text-lg md:text-xl text-black opacity-80">
            Shop by Categories
          </p>
        </div>

        {/* Categories Grid (4 columns on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Render the standard category cards */}
          {categories.slice(0, 7).map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}

          {/* The Special "10+ Categories" Card */}
          {/* Also added 'rounded-md' here for consistency */}
          <div className="aspect-square w-full flex items-center justify-center bg-white border border-gray-200 rounded-md">
            <a href="/shop/all-categories" className="text-center p-4 block">
              <p className="text-4xl md:text-5xl font-bold text-amber-800 mb-2">
                10+
              </p>
              <p className="text-black text-sm md:text-base">
                Categories to choose from
              </p>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;