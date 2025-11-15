import { useState, useRef } from 'react';
import { Search, ShoppingCart, Heart, User, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navItems = [
    { name: 'All Jewellery', hasDropdown: true },
    { name: 'Gold', hasDropdown: true },
    { name: 'Diamond', hasDropdown: true },
    { name: 'Earrings', hasDropdown: true },
    { name: 'Rings', hasDropdown: true },
    { name: 'Daily Wear', hasDropdown: false },
    { name: 'Collections', hasDropdown: true },
    { name: 'Wedding', hasDropdown: true },
    { name: 'Gifting', hasDropdown: false },
  ];

  // CHANGED: Created separate category arrays for each menu item
  const dropdownCategories: { [key: string]: Array<{ name: string; img: string }> } = {
    'All Jewellery': [
      { name: 'Necklaces Sets', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop' },
      { name: 'Choker Sets', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
      { name: 'Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Bangles & Bracelets', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
      { name: 'Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
      { name: 'Pendant Sets', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop' },
      { name: 'Waistbands', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop' },
      { name: 'Anklets', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
    ],
    'Gold': [
      { name: 'Gold Necklaces', img: '/images/jewell.jpg' },
      { name: 'Gold Chains', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
      { name: 'Gold Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Gold Bangles', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
      { name: 'Gold Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
      { name: 'Gold Pendants', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop' },
      { name: 'Gold Coins', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop' },
      { name: 'Temple Jewellery', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
    ],
    'Diamond': [
      { name: 'Diamond Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop' },
      { name: 'Diamond Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Diamond Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
      { name: 'Diamond Bangles', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
      { name: 'Diamond Pendants', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop' },
      { name: 'Solitaire Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
      { name: 'Diamond Mangalsutras', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop' },
      { name: 'Diamond Nose Pins', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
    ],
    'Earrings': [
      { name: 'Studs', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Drop Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Hoops', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Jhumkas', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Chandbali', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Sui Dhaga', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Ear Cuffs', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Balis', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
    ],
    'Rings': [
      { name: 'Engagement Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
      { name: 'Couple Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
      { name: 'Solitaire Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
      { name: 'Gold Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
      { name: 'Diamond Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
      { name: 'Cocktail Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
      { name: 'Band Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
      { name: 'Adjustable Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
    ],
    'Collections': [
      { name: 'Rivaah Collection', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop' },
      { name: 'Virasat Collection', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
      { name: 'Mia Collection', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Mangalsutra', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop' },
      { name: 'Festive Collection', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
      { name: 'Designer Collection', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop' },
      { name: 'Dhanteras Special', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop' },
      { name: 'New Arrivals', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
    ],
    'Wedding': [
      { name: 'Bridal Necklaces', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop' },
      { name: 'Bridal Earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop' },
      { name: 'Bridal Sets', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
      { name: 'Mangalsutra', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop' },
      { name: 'Bridal Bangles', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop' },
      { name: 'Maang Tikka', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop' },
      { name: 'Bridal Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
      { name: 'Wedding Bands', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop' },
    ],
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-serif text-amber-800">JEWEL MARKET</h1>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Right Icons */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-gray-700 hover:text-amber-800 transition">
                <Heart className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-amber-800 transition">
                <User className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-amber-800 transition relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-amber-800"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Desktop */}
      <div 
        className="hidden md:block border-b border-gray-100"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 py-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
              >
                <button className="flex items-center space-x-1 text-gray-700 hover:text-amber-800 transition font-medium text-sm py-1 relative">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-800 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Dropdown Menu - Inside Navigation Container */}
        {/* CHANGED: Now checks if activeDropdown exists in dropdownCategories object */}
        {activeDropdown && dropdownCategories[activeDropdown] && (
          <div 
            className="absolute left-0 right-0 bg-white shadow-2xl animate-fadeIn z-40 border-t border-gray-100"
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-7xl mx-auto px-8 py-10">
              <div className="grid grid-cols-4 gap-8">
                {/* CHANGED: Now maps through category-specific items */}
                {dropdownCategories[activeDropdown].map((category) => (
                  <div key={category.name} className="text-center group cursor-pointer">
                    <div className="bg-white rounded-xl overflow-hidden mb-3 shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={category.img}
                        alt={category.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-amber-700 transition">
                      {category.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search jewellery..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            {/* Mobile Nav Items */}
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 pb-2">
                <button className="w-full text-left text-gray-700 hover:text-amber-800 transition font-medium py-2">
                  {item.name}
                </button>
              </div>
            ))}

            {/* Mobile Icons */}
            <div className="flex justify-around pt-4 border-t border-gray-200">
              <button className="flex flex-col items-center text-gray-700">
                <Heart className="h-6 w-6 mb-1" />
                <span className="text-xs">Wishlist</span>
              </button>
              <button className="flex flex-col items-center text-gray-700">
                <User className="h-6 w-6 mb-1" />
                <span className="text-xs">Account</span>
              </button>
              <button className="flex flex-col items-center text-gray-700 relative">
                <ShoppingCart className="h-6 w-6 mb-1" />
                <span className="text-xs">Cart</span>
                <span className="absolute top-0 right-3 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;