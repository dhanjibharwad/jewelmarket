import React from 'react';

interface CollectionCard {
  id: number;
  title: string;
  image: string;
}

const collections: CollectionCard[] = [
  { id: 1, title: 'DASHAVATAR', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop' },
  { id: 2, title: 'PIQUE-À-JOUR', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop' },
  { id: 3, title: 'ANANT', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop' },
  { id: 4, title: 'MANGALSUTRA', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop' },
  { id: 5, title: 'MIROSA', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=300&fit=crop' },
  { id: 6, title: 'EXPRESSO', image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=300&fit=crop' },
  { id: 7, title: 'BANDHAN', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop' },
  { id: 8, title: 'AMOUR', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=300&fit=crop' },
  { id: 9, title: 'INITIALS', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop' },
  { id: 10, title: 'TWINNING', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=300&fit=crop' },
  { id: 11, title: 'INAYAT', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop' },
  { id: 12, title: 'LA DANZA', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop' },
];

const CollectionCard: React.FC<{ collection: CollectionCard }> = ({ collection }) => {
  return (
    <div className="group relative overflow-hidden shadow-md cursor-pointer transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <div className="transform transition-all duration-500 group-hover:scale-110">
          <h3 className="text-white text-xl md:text-2xl font-light tracking-[0.2em] text-center drop-shadow-lg">
            {collection.title}
          </h3>
          <div className="w-16 h-px bg-amber-400 mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          <p className="text-white/90 text-xs md:text-sm tracking-widest text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            COLLECTIONS
          </p>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
    </div>
  );
};

const JewelryCollections: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-800 mb-2">
            Trending Collections
          </h1>
          <p className="text-base text-slate-500 font-light">
            Trendsetting jewellery suited for every occasion
          </p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JewelryCollections;