import { memo } from 'react';
import { Search } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  thumbnail: string;
}

const ProductCard = memo<ProductCardProps>(({ image, title, price, thumbnail }) => {
  return (
    <div className="group relative flex flex-col w-full max-w-sm">
      {/* Main Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Search Icon Overlay */}
        {/* <button
          className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/80 text-white transition-colors hover:bg-black"
          aria-label="View product details"
        >
          <Search className="h-5 w-5" />
        </button> */}
      </div>

      {/* Product Info Container */}
      <div className="mt-4 flex items-center gap-3 px-1">
        {/* Thumbnail */}
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-100 transition-shadow group-hover:shadow-md">
          <img
            src={thumbnail}
            alt={`${title} thumbnail`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Title and Price */}
        <div className="flex flex-1 flex-col gap-1">
          <h3 className="text-sm font-semibold leading-tight text-gray-900 line-clamp-2 transition-colors group-hover:text-gray-700">
            {title}
          </h3>
          <p className="text-lg font-bold text-gray-900">
            ₹{price.toLocaleString('en-IN')}
          </p>
        </div>

        {/* Quick View Button */}
        <button
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-800 text-white shadow-lg transition-all hover:scale-105 hover:bg-black hover:shadow-xl active:scale-95"
          aria-label="Quick view"
        >
          <Search className="h-4.5 w-4.5" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

// Demo Component
const JewelryShowcase = () => {
  const products = [
    {
      image: 'https://i.pinimg.com/736x/bd/0f/e2/bd0fe22cf12840dc1bbc289e2e01457b.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop',
      title: 'Cira Antique Necklace Set',
      price: 6149
    },
    {
      image: 'https://sudathi.com/cdn/shop/files/4513S117_6.JPG?v=1756406363&width=1500',
      thumbnail: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100&h=100&fit=crop',
      title: 'Niladri Antique Necklace Set',
      price: 4759
    },
    {
      image: 'https://m.media-amazon.com/images/I/71g-Q8y2BzL._AC_UY1100_.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&h=100&fit=crop',
      title: 'Drisana Antique Choker Set',
      price: 5159
    },
    {
      image: 'https://blog.southindiajewels.com/wp-content/uploads/2019/05/jewellery-for-red-silk-sarees-10.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100&h=100&fit=crop',
      title: 'Parag Antique Coin Necklace Set',
      price: 2348
    },
     {
      image: 'https://koranm.com/cdn/shop/files/KO-61719-Cream-3.jpg?v=1754389795&width=1080',
      thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop',
      title: 'Cira Antique Necklace Set',
      price: 6149
    },
    {
      image: 'https://assets.gqindia.com/photos/66d590e9b3892e5ffb331285/2:3/w_720,h_1080,c_limit/MensJewellery%20(1).jpg',
      thumbnail: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100&h=100&fit=crop',
      title: 'Niladri Antique Necklace Set',
      price: 4759
    },
    {
      image: 'https://ryanchristiandesigns.com/cdn/shop/articles/S05_0704-2-min_1.jpg?v=1722170587&width=2048',
      thumbnail: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&h=100&fit=crop',
      title: 'Drisana Antique Choker Set',
      price: 5159
    },
    {
      image: 'https://m.media-amazon.com/images/I/810Xx-oKTKL._AC_UY1100_.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100&h=100&fit=crop',
      title: 'Parag Antique Coin Necklace Set',
      price: 2348
    },
    {
      image: 'https://i.pinimg.com/736x/bd/0f/e2/bd0fe22cf12840dc1bbc289e2e01457b.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=100&h=100&fit=crop',
      title: 'Cira Antique Necklace Set',
      price: 6149
    },
    {
      image: 'https://sudathi.com/cdn/shop/files/4513S117_6.JPG?v=1756406363&width=1500',
      thumbnail: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=100&h=100&fit=crop',
      title: 'Niladri Antique Necklace Set',
      price: 4759
    },
    {
      image: 'https://m.media-amazon.com/images/I/71g-Q8y2BzL._AC_UY1100_.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&h=100&fit=crop',
      title: 'Drisana Antique Choker Set',
      price: 5159
    },
    {
      image: 'https://blog.southindiajewels.com/wp-content/uploads/2019/05/jewellery-for-red-silk-sarees-10.jpg',
      thumbnail: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100&h=100&fit=crop',
      title: 'Parag Antique Coin Necklace Set',
      price: 2348
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        {/* <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-medium text-gray-600">
            Curated specially for you
          </p>
          <h1 className="text-3xl font-bold text-gray-900">
            Special at Jewel
          </h1>
        </div> */}
        {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-amber-800 mb-2">
          Curated specially for you
        </h1>
        <p className="text-base text-slate-500 font-light">
          Special at Jewel
        </p>
      </header>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JewelryShowcase;