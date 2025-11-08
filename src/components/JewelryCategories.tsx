import React from 'react';

const JewelryCategories: React.FC = () => {
    const categories = [
        {
            id: 1,
            title: 'Wedding',
            image: 'https://cdn.pixabay.com/photo/2019/02/18/11/28/hand-4004297_1280.jpg',
            position: 'left'
        },
        {
            id: 2,
            title: 'Diamond',
            image: 'https://cdn.pixabay.com/photo/2023/10/12/13/35/earrings-8310858_1280.jpg',
            position: 'right'
        },
        {
            id: 3,
            title: 'Gold',
            image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=600&fit=crop',
            position: 'left'
        },
        {
            id: 4,
            title: 'Dailywear',
            image: 'https://cdn.pixabay.com/photo/2017/08/26/18/21/jewelry-2683855_960_720.jpg',
            position: 'right'
        }
    ];

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
               <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-800 mb-2">
            Our Collections
          </h1>
          <p className="text-base text-slate-500 font-light">
            Trendsetting jewellery suited for every occasion
          </p>
        </header>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${category.image})` }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                            </div>

                            {/* Category Title */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white text-center">
                                    {category.title}
                                </h2>

                            </div>

                            {/* Amber Accent Border on Hover */}
                            {/* <div className="absolute inset-0 border-4 border-transparent group-hover:border-amber-800 transition-all duration-300 rounded-2xl"></div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JewelryCategories;