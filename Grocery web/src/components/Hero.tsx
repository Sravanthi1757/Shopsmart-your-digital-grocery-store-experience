import React from 'react';
import { ShoppingBag, Truck, Leaf, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fresh Groceries
              <span className="block text-green-200">Delivered to You</span>
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Get the freshest fruits, vegetables, and daily essentials delivered right to your doorstep. 
              Quality guaranteed, prices unbeatable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Start Shopping
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg"
              alt="Fresh Groceries"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">100% Fresh</h3>
            <p className="text-green-200 text-sm">Premium quality fresh products</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Free Delivery</h3>
            <p className="text-green-200 text-sm">Free delivery on orders above ₹500</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Quick Delivery</h3>
            <p className="text-green-200 text-sm">Same day delivery available</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <h3 className="font-semibold mb-2">Easy Returns</h3>
            <p className="text-green-200 text-sm">Hassle-free return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;