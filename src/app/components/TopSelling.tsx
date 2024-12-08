import React from 'react';

const products = [
  {
    name: 'Vertical Striped Shirt',
    price: '$120',
    rating: '4.5/5',
    image: '/topSelling/img-1.png',
  },
  {
    name: 'Courage Graphic T-Shirt',
    price: '$240',
    discountPrice: '$260',
    discount: '20%',
    rating: '5/5',
    image: '/topSelling/img-4.png',
  },
  {
    name: 'Loose Fit Bermuda Shorts',
    price: '$180',
    rating: '4.5/5',
    image: '/topSelling/img-3.png',
  },
  {
    name: 'Faded Skinny Jeans',
    price: '$130',
    discountPrice: '$160',
    discount: '30%',
    rating: '4.5/5',
    image: '/topSelling/img-2.png',
  },
];

const TopSelling = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-3xl font-extrabold text-center mb-6">TOP SELLING</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="p-4 hover:shadow-lg transition">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-gray-600">
                    <span className="text-black font-semibold">{product.price}</span>
                    {product.discountPrice && (
                      <span className="ml-2 line-through text-red-500">{product.discountPrice}</span>
                    )}
                  </p>
                  {product.discount && (
                    <span className="text-sm text-green-500">{product.discount}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">{product.rating}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-12 py-2 bg-white text-black shadow font-medium rounded-full hover:bg-gray-800 hover:text-white">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
