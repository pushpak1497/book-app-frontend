import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-col text-center md:text-left md:flex-row justify-between items-center">
          <div class="mb-4 md:mb-0">
            <h2 class="text-lg font-semibold text-[#d15b24]">Book Seller</h2>
            <p class="text-sm">© 2024 All rights reserved.</p>
          </div>
          <div class="flex justify-between items-center  space-x-4">
            <Link to="/" class="text-gray-400 hover:text-white">
              Home
            </Link>
            <Link to="#services" class="text-gray-400 hover:text-white">
              Services
            </Link>
            <Link to="#about" class="text-gray-400 hover:text-white">
              About Us
            </Link>
            <Link to="#" class="text-gray-400 hover:text-white">
              Contact Us
            </Link>
          </div>
          <div class="flex flex-row items-center space-x-4 mt-4 md:mt-0">
            <Link to="#" class="text-gray-400 hover:text-white">
              <FaInstagram />
            </Link>
            <Link to="#" class="text-gray-400 hover:text-white">
              <FaTwitter />
            </Link>
            <Link to="#" class="text-gray-400 hover:text-white">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
