import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 mt-20">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h1
            onClick={() => navigate("/")}
            className="logo cursor-pointer text-lg md:text-2xl text-primary-color pb-3"
          >
            Stylence Bazzar
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Discover trends that define your style. Fashora brings the best of
            global fashion — elegant, bold, and timeless.
          </p>
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-pink-500 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-sky-500 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Shop</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Accessories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Footwear
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Customer Care
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Help & FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500 transition-colors">
                Track Order
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <MapPin size={18} />
              <span>123 Fashion Street, Mumbai, India</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={18} />
              <span>support@fashora.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Fashora. All rights reserved.</p>
        <div className="flex space-x-5 mt-3 md:mt-0">
          <a href="#" className="hover:text-gray-900 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-gray-900 transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
