import React from "react";
import skin1 from "../../assets/images/skin-1.jpeg";
import skin2 from "../../assets/images/skin-2.jpeg"; 
import { Link } from "react-router-dom";

const products = [
  { label: "Moisturizer", image: skin1 },
  { label: "Moisturizer", image: skin2 },
];

const ShopByProduct = () => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-16 my-6 p-4 rounded-2xl"
      style={{ backgroundColor: "#fce4ec" }}>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-bold text-gray-900">Shop by Product</h2>
        <Link to="/products" className="text-xs font-medium text-pink-500 hover:text-pink-600 transition-colors">
          View more
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product, i) => (
          <div key={i} className="rounded-xl overflow-hidden bg-white cursor-pointer hover:scale-[1.02] transition-transform">
            <img
              src={product.image}
              alt={product.label}
              className="w-full h-36 sm:h-44 md:h-52 lg:h-60 w-full object-cover"
            />
            <div className="px-3 py-2 text-xs sm:text-sm font-medium text-gray-800">
              {product.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ShopByProduct;