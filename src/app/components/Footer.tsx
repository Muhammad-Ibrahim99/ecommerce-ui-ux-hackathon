import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Upper Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          {/* Shop Info */}
          <div>
            <h3 className="text-lg text-black font-bold mb-4">SHOP.CO</h3>
            <p className="text-gray-400">
              Find clothes that match your style. Explore a wide range of branded items and enjoy seamless shopping.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg text-black font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Features', 'Works', 'Career'].map((link, index) => (
                <li key={index} className="hover:text-black">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-lg text-black font-bold mb-4">Help</h4>
            <ul className="space-y-2">
              {['Costumer Suppot', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'].map((category, index) => (
                <li key={index} className="hover:text-black">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="text-lg text-black font-bold mb-4">FAQ</h4>
            <ul className="space-y-2">
              {['Account', 'Manage Deliveries', 'Orders', 'Payments'].map((category, index) => (
                <li key={index} className="hover:text-black">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-lg text-black font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-800"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2024 SHOP.CO. All rights reserved.</p>
          <div className="flex items-center justify-center space-x-4 mt-4">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-white"
                aria-label={platform}
              >
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

