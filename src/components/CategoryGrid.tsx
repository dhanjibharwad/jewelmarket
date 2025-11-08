import React from 'react';

// Define the structure for a category item
interface Category {
  name: string;
  imageUrl: string;
}

// Data structure mimicking the categories in the image
const categories: Category[] = [
  { name: 'EARRINGS', imageUrl: 'https://cdn.pixabay.com/photo/2019/02/11/19/53/jewel-3990596_640.jpg' },
  { name: 'FINGER RINGS', imageUrl: '/images/jewell.jpg' },
  { name: 'PENDANTS', imageUrl: 'https://cdn.pixabay.com/photo/2015/02/06/03/27/jewelry-625723_1280.jpg' },
  { name: 'MANGALSUTRA', imageUrl: '/images/gold.jpg' },
  { name: 'BRACELETS', imageUrl: 'https://cdn.pixabay.com/photo/2018/11/02/16/50/gold-jewelry-3790542_1280.jpg' },
  { name: 'BANGLES', imageUrl: 'https://cdn.pixabay.com/photo/2016/02/02/15/55/jewellery-1175535_1280.jpg' },
  { name: 'CHAINS', imageUrl: 'https://cdn.pixabay.com/photo/2017/05/25/02/25/gold-2342070_640.jpg' },
];

// Helper component for a single category card
const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <a 
      href={`/shop/${category.name.toLowerCase().replace(' ', '-')}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Image Container with Overlay */}
      <div className="aspect-square w-full relative overflow-hidden">
        <img 
          src={category.imageUrl} 
          alt={category.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; 
            target.src="https://placehold.co/400x400/f0f0f0/333333?text=Image+Missing";
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Hover Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white font-semibold text-lg px-4 py-2 border-2 border-white rounded-lg backdrop-blur-sm">
            Shop Now
          </span>
        </div>
      </div>
      
      {/* Title Section */}
      <div className="py-5 px-4 bg-white group-hover:bg-amber-800 transition-colors duration-300">
        <p className="text-black group-hover:text-white font-semibold text-sm tracking-[0.15em] transition-colors duration-300 text-center">
          {category.name}
        </p>
      </div>
    </a>
  );
};

const CategoryGrid: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 lg:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20">
           <h1 className="text-4xl md:text-5xl font-serif text-amber-800 mb-2">
            Find Your Perfect Match
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-0.5 w-12 bg-amber-800"></div>
            <p className="text-lg md:text-xl text-gray-600 font-light">
              Shop by Categories
            </p>
            <div className="h-0.5 w-12 bg-amber-800"></div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          
          {/* Render the standard category cards */}
          {categories.slice(0, 7).map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}

          {/* The Special "10+ Categories" Card */}
          <a 
            href="/shop/all-categories" 
            className="group aspect-square w-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-800 to-amber-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
            </div>
            
            <div className="text-center p-6 relative z-10">
              <p className="text-6xl md:text-7xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                10+
              </p>
              <div className="h-1 w-16 bg-white mx-auto mb-3 rounded-full"></div>
              <p className="text-white text-base md:text-lg font-medium tracking-wide">
                Categories to<br />choose from
              </p>
              <div className="mt-4 inline-block border-2 border-white text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore All
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;