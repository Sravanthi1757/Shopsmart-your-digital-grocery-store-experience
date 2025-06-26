import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">ShopSmart</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for fresh groceries and daily essentials. 
              Quality products, competitive prices, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Fresh Fruits</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Vegetables</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Dairy Products</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Special Offers</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Track Your Order</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3" />
                <span>support@shopsmart.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-1" />
                <span>123 Green Street, Fresh Market Area, Mumbai, Maharashtra 400001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ShopSmart. All rights reserved. Made with ❤️ for fresh food lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;